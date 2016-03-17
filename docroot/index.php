<?php
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/view',
));

// Home route
$app->get('/', function () use ($app) {
	return $app['twig']->render('home.html.twig');
});

// Catch all route for views
$app->get('/{view}', function ($view) use ($app) {
    return $app['twig']->render($view . '.html.twig');
})->assert('view', '.*');

$app->run();
