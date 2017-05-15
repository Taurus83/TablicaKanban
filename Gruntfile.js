module.exports = function(grunt) {

// komentarz blokowy do inicjalizacji modułu JS-hint
// grunt.initConfig;
// funkcja inicjuje i wywołuje konfigurację modułu JS-hint

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
  });

/*
  komentarz blokowy do defaultowych tasków
  grunt.loadNpmTasks('grunt-contrib-jshint');
  task ładuje moduł JS-hint
  grunt.registerTask('default', ['jshint']);
  task uruchamia moduł JS-hint
*/

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};