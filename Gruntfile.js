module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),

    // Compile the webfont Sass.
    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/clear-sans.css': 'scss/clear-sans.scss'
        }
      }
    },

    // Handle vendor prefixing.
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      dist: {
        src: 'css/*.css'
      },
      docs: {
        src: '_site/css/*.css'
      }
    },

    // Clean previous versions of the webfont CSS.
    clean: {
      dist: ['docs/css/clear-sans.css', 'docs/fonts']
    },

    // Copy font files to `docs`.
    copy: {
      dist: {
        files: [{
          expand: true,
          pwd: './',
          src: ['css/**', 'fonts/**'],
          dest: 'docs'
        }]
      }
    },

    // Watch files for changes.
    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs/css/styles.scss'],
        tasks: ['sass', 'postcss']
      }
    },

    // Build Jekyll site.
    jekyll: {
      build: {
        options: {
          bundleExec: true,
          src: 'docs',
          dest: '_site',
          config: '_config.yml'
        }
      }
    },

    // Publish to GitHub pages.
    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:resir014/Clear-Sans-Webfont.git',
          branch: 'gh-pages'
        }
      }
    }
  })

  // Build the webfont CSS.
  grunt.registerTask('build', ['sass', 'clean', 'copy'])

  // Publish docs to `gh-pages` branch.
  grunt.registerTask('publish', ['build', 'jekyll', 'postcss:docs', 'buildcontrol:pages'])

  // Default task.
  grunt.registerTask('default', ['build'])
}
