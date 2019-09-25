/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Bienvenido a space kids, empezaremos un emocionante viaje al espacio de acuerdo a tus decisiones ¿a dónde quieres ir hoy? Las opciones son La luna, marte o el sol';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Space Kids', speechText)
      .getResponse();
  },
};

// INICIO VIAJE A LA LUNA
const LaLunaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'LaLunaIntent';
  },
  handle(handlerInput) {
    const speechText = 'Antes de ir a la Luna, unas curiosidades. La luna es alrededor de una cuarta parte del tamaño de la Tierra.'
    +' Una persona que pese 45 kilos, en la Luna pesaría 8,05 kilos.'
    +' Nuestro destino está a aproximadamente 385000 kilómetros de la tierra, su superficie es rocosa salpicada con cráteres formados por impactos de asteroides hace millones de años.'
    +'Un viaje a la luna en una nave espacial toma alrededor de 3 días. ¡LISTO! Llegamos a la luna. Lo primero que ves es un robot y un rastro en el suelo, de que te gustaría saber ¿el rastro o el robot?';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos a la Luna!', speechText)
      .getResponse();
  },
};

//LUNA HUELLA

const LaLunaHuellaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'LaLunaHuellaIntent';
  },
  handle(handlerInput) {
    const speechText = '“Un pequeño paso para el hombre, pero un gran salto para la humanidad” esta es la frase que dijo neil armstrong al poner su pie en la luna en 1969 la huella que estas viendo es de él, las huellas perduran por años, ya que al no haber vientos por falta de atmósfera no se desarman. ¿Quieres saber sobre el robot o vamos a marte, al sol? Tambien puedes terminar el juego';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos a la Luna!', speechText)
      .getResponse();
  },
};

//LUNA ROBOT

const LaLunaRobotIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'LaLunaRobotIntent';
  },
  handle(handlerInput) {
    const speechText = 'El robot es yutu 2, es un vehículo lunar de 1,5 m de largo, con un peso de 120 kg diseñado para explorar la superficie de la Luna, realizar mediciones y recolección de rocas además de hacer experimentos biológicos. ¿Quieres saber sobre el rastro? o ¿quieres ir a marte o al sol? tambien puedes terminar el juego.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos a la Luna!', speechText)
      .getResponse();
  },
};

//MARTE

const MarteIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MarteIntent';
  },
  handle(handlerInput) {
    const speechText = 'Nuestro destino seleccionado es marte un planeta que es más pequeño que la tierra, de hecho tiene casi la mitad del tamaño de la tierra. Si en un automóvil viajamos desde Marte a la Tierra, a una velocidad de 96 km/h, nos llevaría un total de 271 años y 221 días llegar a casa. ¡Ya llegamos a Marte! Hay dos caminos ¿cuál camino quieres elegir? ¿el Volcán más grande o los gigantescos cañones de marte? ';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos a marte!', speechText)
      .getResponse();
  },
};

//MARTE VOLCAN

const MarteVolcanIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MarteVolcanIntent';
  },
  handle(handlerInput) {
    const speechText = 'Marte, nuestro vecino rojo, tiene el volcán más alto de todos los planetas de nuestro Sistema. El Monte Olimpo  se eleva casi 23 kilómetros sobre la llanura que lo rodea. Esto equivale a tres veces la altura de nuestro monte Everest. ¿Quieres saber sobre el los gigantescos cañones? o ¿quieres ir a la luna o al sol? tambien puedes terminar el juego.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos marte!', speechText)
      .getResponse();
  },
};

//MARTE CAÑONES

const MarteCanonIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MarteCanonIntent';
  },
  handle(handlerInput) {
    const speechText = 'Valles Marineris, que significa Valle de los Marineros, es el nombre de un gigantesco sistema de cañones que recorre 4500 km del planeta Marte. El Valle de los Marineros es tan largo como los Estados Unidos. ¿Quieres saber sobre el volcan? o ¿quieres ir a la luna o al sol? tambien puedes terminar el juego.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos a Marte!', speechText)
      .getResponse();
  },
};

//SOL

const ElSolIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ElSolIntent';
  },
  handle(handlerInput) {
    const speechText = 'El Sol está a aproximadamente 150 millones de kilómetros de la Tierra, para llegar hasta él, antes tendremos que cruzar la órbita de Venus y Mercurio. El Sol es una estrella, la más cercana a la Tierra. Es el elemento más grande del Sistema Solar, de hecho el 99,85% de la materia total del Sistema está contenida en él. El Sol es nuestra principal fuente de energía, ya que nos da luz y calor. ¿quieres ir a la luna o a marte? recuerda que tambien puedes terminar el juego.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('¡Vamos al Sol!', speechText)
      .getResponse();
  },
};

//SOL MERCURIO

//SOL VENUS

//SOL SOL



const PreguntaUnoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PreguntaUnoIntent';
  },
  handle(handlerInput) {
    const speechText = 'Todas las lunas y planetas en nuestro sistema solar han sido golpeados por una gran cantidad de meteoritos. Esto fue especialmente verdadero en el pasado cuando había muchos más meteoritos viajando en nuestro sistema solar.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('¿Por qué está la Luna cubierta con cráteres?', speechText)
      .getResponse();
  },
};

const PreguntaDosIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PreguntaDosIntent';
  },
  handle(handlerInput) {
    const speechText = 'La superficie de Marte tiene un color naranja rojizo porque su suelo contiene óxido de hierro o partículas de óxido.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('¿Por qué está la Luna cubierta con cráteres?', speechText)
      .getResponse();
  },
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = '¡Vamos a aprender sobre el espacio! ¿A donde quieres ir? Podemos ir  la luna, a marte o al sol';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Space Kids', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = '¡ADIOS, AMIGO!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Space Kids', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Lo siento, no entendi el comando. Porfavor intenta de nuevo')
      .reprompt('Lo siento, no entendi el comando. Porfavor intenta de nuevo')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ElSolIntentHandler,
    LaLunaIntentHandler,
    LaLunaRobotIntentHandler,
    LaLunaHuellaIntentHandler,
    PreguntaUnoIntentHandler,
    MarteIntentHandler,
    MarteVolcanIntentHandler,
    MarteCanonIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    PreguntaDosIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
