module.exports = function(grunt) {

  grunt.initConfig({
    jsonschema_faker: {
      options: {
        indent: 2
      },
      target: {
        src: ['server/user.schema.json'],
        dest: 'server/.temp.json',
        options: {
          size: 500
        }
      }
    }
  });

  grunt.task.registerTask('wrap-json', 'Wrap json data', function() {
    var data = grunt.file.readJSON('server/.temp.json');
    var id = 1;
    data.forEach(function(el){
      el.id = id++;
    });
    grunt.file.write("server/db.json", JSON.stringify({
      config: grunt.file.readJSON('server/config.json'),
      users: data
    }, null, 2));
  });

  grunt.loadNpmTasks('grunt-jsonschema-faker');

  grunt.registerTask('generate', [
    'jsonschema_faker',
    'wrap-json'
  ]);

  grunt.registerTask('default', ['generate']);
};
