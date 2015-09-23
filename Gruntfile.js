module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

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
          require('autoprefixer-core')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      dist: {
        src: 'css/*.css'
      },
      docs: {
        src: '_site/css/*.css'
      }
    },

    // Copy font files to `docs`
    copy: {
      dist: {
        files: [{
          expand: true,
          src: 'css/**',
          dest: 'docs'
        }]
      }
    },

    // Build tools

    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs/css/styles.scss'],
        tasks: ['sass', 'postcss']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: '_site',
        config: '_config.yml'
      }
    },

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
  });

  // Builds the webfont CSS.
  grunt.registerTask('build', ['sass', 'copy']);

  // Generate and format the CSS
  grunt.registerTask('default', ['build', 'jekyll', 'postcss']);

  // Publish docs to `gh-pages` branch
  grunt.registerTask('publish', ['jekyll', 'postcss:docs', 'buildcontrol:pages']);
};
