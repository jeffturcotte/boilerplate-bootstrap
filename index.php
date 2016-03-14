<?php
require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/view',
));

//Define your routes
$app->get('/', function () use ($app) {
	return $app['twig']->render('home.html.twig');
});

$app->get('/master', function () use ($app) {
	return $app['twig']->render('master.html.twig');
});


$app->run();
