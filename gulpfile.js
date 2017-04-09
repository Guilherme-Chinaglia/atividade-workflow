var gulp = require("gulp");
var gulp_htmlmin = require("gulp-htmlmin");
var gulp_sass = require("gulp-sass");

gulp.task('compilar',function(){
	return gulp
				.src('source/scss/**/*.scss')//varre a pasta indicada
				.pipe(gulp_sass())//roda a função gulp-sass
				.pipe(gulp.dest('dist/css'));//destino do arquivo compilado
});

gulp.task('minificar',function(){
	return gulp
				.src('source/index.html')
				.pipe(gulp_htmlmin())
				.pipe(gulp.dest('dist/'));
});

gulp.task('watch',function(){
	gulp.watch('source/scss/**/*.scss',['compilar']);//sub pastas contendo arquivos .scss
	gulp.watch('source/index.html',['minificar']);//watch vigia as alterações na pasta mencionada e atualiza na de destino
});

/*no terminal só chamar gulp*/
gulp.task('default',['watch']);