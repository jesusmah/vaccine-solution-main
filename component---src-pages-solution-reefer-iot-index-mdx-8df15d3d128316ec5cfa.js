(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+7uz":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=p("PageDescription"),s=p("AnchorLinks"),c=p("AnchorLink"),b={_frontmatter:r},d=o.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(d,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},"This Simulator webapp is a simple python (3.7) Flask web app exposing a REST POST end point to control the type of simulation to run and to produce Reefer telemetry events to kafka `telemetries` topic."),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(c,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(c,{mdxType:"AnchorLink"},"Build"),Object(n.b)(c,{mdxType:"AnchorLink"},"Run"),Object(n.b)(c,{mdxType:"AnchorLink"},"Usage Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("h3",null,"Application requirements"),Object(n.b)("p",null,"The simulator is not in the critical path for production like component. It is here to help us develop the other components of the solution as we do not have real life Refrigerator container. Here are the simple user stories for this app:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to start the simulator tool from command line so I can get a csv file with telemetry data")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to be able to simulate co2 sensor, o2 sensor, temperature and power sensor issue so I can get relevant data for the machine learning model to make sense")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to start the simulator tool from command line using parameter so I can get save data to a remote document oriented database: mongodb on IBM cloud.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to demonstrate the solution, I want to call a REST api to control the generation of faulty sensor data so I can get the scoring service returning maintenance needed.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to demonstrate the cold chain violation, I want to call a REST api to control a change to the temperature over a time period so cold chain violation can be identified with a complex event processing or AI model."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"805px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABjklEQVQoz5WSy04UURCG+4l8DXeufAwSlyxdGh/AkGgiuDImsnJB4mICsiAxIUHDQmZgei49DXNpYYCecz+f1d1hFoYRrKRybqm//v+vk/zs/ebNzi+2Wqe8/dqu11I7/o4YI4+J5OXHI5Kn73n+epcnL76QPPtAms8hRMYXU4qiWII9BjRp/chY29jn3c4xrz4dsr55wLw0OGs4OWnTaXew1i4BH8rkX92cdVjj+J9IgqD6UKFXKu/2jbTg5ey83HkWSjGZFsyKS5xzeO9xkvUq5142RkvzZBX1BjBgTCO38nLv2z7ZKG/eQqizCqUVre8dzs7N/ZKXQxC2SvxE6rL+iO3tz+T56F6pt1pShdUe3oE20iJX8xs6p91a9ngyYyhML6+uxQ6wLohsL4r8aoYNYKwLlA01qBCuwfqDjGGW0037XN+U9dvCeIyLDzOM0tUuNE4Z9O2C2XjKMB3QP0vJegNKYe61xZYKL36v/jYVy8Z9MJoo/5IqY2B+cc4k7RJlGOIJ0ci9FhNl2n8AOZ5OKt7bwxYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/56490/reefer-simul-1.png",srcSet:["/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/7fc1e/reefer-simul-1.png 288w","/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/a5df1/reefer-simul-1.png 576w","/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/56490/reefer-simul-1.png 805w"],sizes:"(max-width: 805px) 100vw, 805px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"The simulator needs to integrate with kafka / IBM Event Streams deployed as service on the cloud or deployed on OpenShift cluster using Cloud Pak for Integration."),Object(n.b)("h3",null,"Design approach"),Object(n.b)("p",null,"To support remote control of the simulator while running as webapp, we define a POST operation on the ",Object(n.b)("inlineCode",{parentName:"p"},"/control")," URL:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQY033RO0rEQByA8dxIPMBKwE5RUKwED2Bj5QnsXBSW9bWKheApLMVOLIQtFERw17yTnSSTly6Ln5O4ARVN8WOmmP83DKPdOk84IsAIPQxR87/tPV4VNxEEhSTI418kfhZhhj6OOqO5MkSOc+L37IcwT4je0kpYJIi8JP+QMEpjBq6NJ1VwGFg4qcCasqfrs2diyAAnj4g+ChLGjXImiEmGZqkhVw1VshCviLGSEb2LS9qdQzonZ7S7R432Do7Z2d3n6uZaPVmFHBWqlUEj8tnc2mZ1bYPllXXm9EVa+sK/9PklZmZbdE/P0cqIW8W+wvUF948P3PX7vNgGA99mqD6tkXAx5YhPV+adlsKgtqsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/3cbba/simulapp-control-swagger.png",srcSet:["/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/7fc1e/simulapp-control-swagger.png 288w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/a5df1/simulapp-control-swagger.png 576w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/3cbba/simulapp-control-swagger.png 1152w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/0b124/simulapp-control-swagger.png 1728w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/4ea69/simulapp-control-swagger.png 2304w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/07adc/simulapp-control-swagger.png 2788w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null," The Json control object defines the number records to produce, the sensor to impact (co2sensor, temperature, o2sensor, power) , the container ID, (one of C01, C02, C03, C04) which carries the product referenced by product_id (one of P01, P02, P03, P04, P05) - The P01 is the covid-19 vaccine:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-json"}),"    { 'containerID': 'C02',\n    'simulation': 'temperature',\n    'nb_of_records': 4000,\n    \"product_id\":  \"P01\"\n    }\n")),Object(n.b)("p",null,"We have tried to support a domain driven design approach to structure the code, with domain, infrastructure and app modules. The domain module has a unique class for the simulator which main goal is to generate data tuples or records for the different simulation types. It is reused by the standalone simulation CLI tool to generate data at rest, if needed."),Object(n.b)("p",null,"As the simulator is also a webapp we need to package it with ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.fullstackpython.com/flask.html"}),"Flask")," and run it using one of the Web Server Gateway Interface (WSGI) implementation, like ",Object(n.b)("a",i({parentName:"p"},{href:"http://docs.gunicorn.org/"}),"Gunicorn"),"."),Object(n.b)("p",null,"If you want to go over the code, ee recommend to follow ",Object(n.b)("a",i({parentName:"p"},{href:"https://flask.palletsprojects.com/en/1.1.x/tutorial/"}),"Flask tutorial"),"."),Object(n.b)("p",null,"Flask is a simple library to implement REST based microservice and web application in Python. It has other related projects to add interesting features to develop production ready application. The standard development includes defining routes, function to support handling the request and generating HTTP response, but also defining APIs… Read more with the ",Object(n.b)("a",i({parentName:"p"},{href:"http://exploreflask.com/en/latest/"}),"explore Flask book online"),"."),Object(n.b)("p",null,"Flask is mono threaded so it fits well in a simple web application for development purpose, but for production it is recommended to add a web server like ",Object(n.b)("a",i({parentName:"p"},{href:"https://gunicorn.org/"}),"Gunicorn")," to handle multiple concurrent requests."),Object(n.b)("h3",null,"Anatomy"),Object(n.b)("p",null,"The application is built using ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev"}),"Appsody"),". The ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/getting-started/installation"}),"Appsody CLI")," is required locally to build and deploy the application properly."),Object(n.b)("p",null,"The app is done using Flask, and the code is generated using ",Object(n.b)("inlineCode",{parentName:"p"},"appsody init python-flask")," command with the Python Flask appsody stack and template."),Object(n.b)("p",null,"We recommend reading ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/appsody/stacks/tree/master/incubator/python-flask"}),"the Python Flask Appsody Stack git hub repo")," to get familiar with the appsody python stack."),Object(n.b)("p",null,"The Flask application imports the ‘userapp’ where the real application code resides, and adds blueprints to define health and metrics APIs:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from flask import Flask\n\napp = Flask(__name__)\n\nfrom userapp import *\n\nfrom server.routes.health import health_bp\napp.register_blueprint(health_bp)\nfrom server.routes.prometheus import metrics_bp\napp.register_blueprint(metrics_bp)\n")),Object(n.b)("p",null,"This code is not updateable, as it is part of the appsody stack image. But we can add our business logic as part of the ",Object(n.b)("inlineCode",{parentName:"p"},"domain/__init__.py")," code using another ",Object(n.b)("a",i({parentName:"p"},{href:"https://flask.palletsprojects.com/en/1.1.x/blueprints/"}),"Flask blueprints")," module ",Object(n.b)("a",i({parentName:"p"},{href:""}),"api/controller.py"),"."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"userapp")," module is defined when appsody integrates our code with the base stack image using Docker. Below is an extract of the docker file managing module installation and defining what appsody does during build, run and test:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-dockerfile"}),"ENV APPSODY_MOUNTS=/:/project/userapp\nENV APPSODY_DEPS=/project/deps\nWORKDIR /project\nRUN python -m pip install -r requirements.txt -t /project/deps\nENV FLASK_APP=server/__init__.py\n")),Object(n.b)("p",null,"Looking at the content of the final docker container running the application we can see this structure:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"/project\n|-- Dockerfile\n    Pipfile\n    Pipfile.lock\n    constraints.txt\n    requirements.txt\n    deps/\n    server/\n    test/\n    userapp/\n")),Object(n.b)("p",null,"The basic concept of blueprints is that they record operations to execute when each operation is registered on an application. So to add one operation to support a new control, we add a blueprint, and then register it in the main application: ",Object(n.b)("inlineCode",{parentName:"p"},"__init__py"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from userapp.api.controller import control_blueprint\napp.register_blueprint(control_blueprint)\n")),Object(n.b)("p",null,"To define the API, we use ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/flasgger/flasgger"}),"Flasgger")," as an extension to Flask to extract ",Object(n.b)("a",i({parentName:"p"},{href:"https://swagger.io/docs/specification/about/"}),"Open API specification")," from the code. It comes with Swagger UI, so we can see the API documentation of the microservice at the URL ",Object(n.b)("inlineCode",{parentName:"p"},"/apidocs"),".  It can also validate the data according to the schema defined."),Object(n.b)("p",null,"For the POST ",Object(n.b)("inlineCode",{parentName:"p"},"/control")," we defined the Swagger 2.0 API in a separate file: ",Object(n.b)("inlineCode",{parentName:"p"},"api/controlapi.yml")," and import it at the method level to support the POST operation. This method is defined in its blueprint as a REST resource. The code ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator/blob/master/simulator/api/controller.py"}),"controller.py")," is under ",Object(n.b)("inlineCode",{parentName:"p"},"api")," folder."),Object(n.b)("p",null,"Below is a code extract to illustrate the use of Flask-RESTful and blueprint and the swagger annotation:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),'from flasgger import swag_from\nfrom flask_restful import Resource, Api\n\ncontrol_blueprint = Blueprint("control", __name__)\napi = Api(control_blueprint)\n\nclass SimulationController(Resource):\n    @swag_from(\'controlapi.yml\')\n    def post(self):\n        # ..\napi.add_resource(SimulationController, "/control")\n')),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator/blob/master/Pipfile"}),"Pipfile")," defines the dependencies for this component, and is used by ",Object(n.b)("inlineCode",{parentName:"p"},"pipenv")," during the automatic build process within ",Object(n.b)("inlineCode",{parentName:"p"},"appsody build"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Github repository:")," ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator"}),"vaccine-reefer-simulator")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics produced to:")," telemetries"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Event sents to the topic:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),'{"containerID": metric[0],\n"timestamp": str(metric[1]),\n"type":"ReeferTelemetries",\n"payload"={ "timestamp": "2019-09-04 T15:31 Z",\n            "containerID": "C101",\n            "product_id": "P02",\n            "sensors": {\n              "temperature": 2.49647,\n              "oxygen_level" : 20.4543,\n              "nitrogen_level" : 79.4046,\n              "carbon_dioxide_level" : 4.42579,\n              "humidity_level" : 60.3148,\n              "fan_1": "True",\n              "fan_2" : "True",\n              "fan_3" : "True",\n              "ambiant_temperature": 19.8447\n            },\n            "content_type": 1,\n            "target_temperature": 6.0,\n            "kilowatts": 3.44686,\n            "latitude": "37.8226902168957,",\n            "longitude": "-122.3248956640928",\n            "time_door_open" : 300,\n            "defrost_cycle": 6\n        }\n}\n')),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"This microservice is built using the Appsody development framework. The Appsody CLI is a required prerequisite for building the application locally."),Object(n.b)("p",null,"Appsody will build the application by pulling the contents of the Appsody Stack it is based on and then performing the local application build inside the containerized environment:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"appsody build -t ibmcase/vaccine-reefer-simulator:v1.0.0 --push")),Object(n.b)("p",null,"You can optionally specify a container tag. If left blank, latest will be used.\nYou can optionally supply the —push flag to automatically push the built image to specified remote repository.\nPerforming an Appsody build will update the ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file in the same directory with current information for the application image, labels, and annotations fields."),Object(n.b)("h2",null,"Run"),Object(n.b)("p",null,"To launch the web application in development mode, using a local kafka cluster based on Strimzi image 2.5, use the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),'docker-compose up &\n# set environment variables - from simulator folder\nexport KAFKA_BROKERS=kafka:9092\n# Run the app with a local kafka broker started with docker compose\n$ appsody run --network kafkanet --docker-options="-e KAFKA_BROKERS=$KAFKA_BROKERS"\n')),Object(n.b)("h3",null,"Run locally with remote Event Streams on OCP"),Object(n.b)("p",null,"If you want to remote connect to Event Streams on OpenShift, you need to get the external URL for the bootstrap end point and the TLS certificate in the form of a .pem file. The following commands can help you do so."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"# login to OpenShift\noc login --token=L0.... --server=https://api.eda-solutions.gse-ocp.net:6443\n# Access to the project where event streams run\noc project integration\n# Access to Event Streams cluster\ncloudctl es init\n# From the result get the bootstrap address: some thing like:\n# ...-kafka-bootstrap-integration.apps.....:443 \n# Get the certificate\ncloudctl es certificates --format pem\nmv es-cert.pem certs/\n# Get one of the kafka user defined with the scram-sha-512 authentication\noc get kafkausers -n integration\n# For example here is an output: \n# NAME      AUTHENTICATION   AUTHORIZATION\n# my-user1  scram-sha-512    simple\n")),Object(n.b)("p",null,"Set the following environment variables:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"export KAFKA_BROKERS=...-kafka-bootstrap-integration.apps.....:443 \nexport KAFKA_USER=my-user1\nexport KAFKA_PWD=$(oc -n integration get secret my-user1 -o jsonpath='{.data.password}'  | base64 --decode)\n")),Object(n.b)("p",null,"Then start the app (the previous steps has to be done only for the first run):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),'appsody run --docker-options "-e KAFKA_BROKERS=$KAFKA_BROKERS -e KAFKA_USER=$KAFKA_USER -e KAFKA_PWD=$KAFKA_PWD -v $(pwd)/certs/es-cert.pem:/certs"\n')),Object(n.b)("p",null,"The trace shows the Kafka configuration options:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"Kafka options are:\n[Container] {'bootstrap.servers': '....:443', 'group.id': 'ReeferTelemetryProducers', 'security.protocol': 'SASL_SSL', 'sasl.mechanisms': 'SRAM-SHA-512', 'sasl.username': 'my-user1', 'sasl.password': 'xC..VDc', 'ssl.ca.location': '/certs/es-cert.pem'}\n")),Object(n.b)("h3",null,"Testing"),Object(n.b)("h4",null,"Unit test the Simulator"),Object(n.b)("p",null,"The test coverage for this project is not great yet. To run the test use ",Object(n.b)("inlineCode",{parentName:"p"},"appsody test"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"cd ./scripts\n./startPythonEnv.sh\nroot@1de81b16f940:/# export PYTHONPATH=/home/reeferiotsimulator\nroot@1de81b16f940:/# cd /home/reeferiotsimulator\nroot@1de81b16f940:/# python test/unit/TestSimulator.py\n")),Object(n.b)("h4",null,"Functional testing"),Object(n.b)("p",null,"To be able to run locally, you need a Kafka simple cluster. We have defined a docker compose for that, see ",Object(n.b)("a",i({parentName:"p"},{href:"#run"}),"previous section"),"."),Object(n.b)("p",null,"Use the web browser or a Postman to go to the URL: ",Object(n.b)("a",i({parentName:"p"},{href:"http://localhost:8080/control"}),"http://localhost:8080/control")," and do a POST. Here is an image of the open API UI:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbUlEQVQoz4WSy07DMBBF/f9fwQLBij1/wFMIsUFIUFrSxvEjsZ1n2zi9jN0U2gqVxdHcGcfXHmfYNX/Bk5ggLRSSQhJijBJzo4itXlgN1TrI1hJujzGn76QRYIkSUK5A2bewqwYusG6iFlQ3yxo2QLnd6WPCGh1u6WD2IReY5xy8LpCO8KbAotR4nU8xUSmmRUb1PNbj+h+krQGn27KQCBL7ZI2B7BxSTc8gMpi6QtuviOVJSrop47R5ZxIQzVYrMjTOQRcGZV2jH/xJ/DBEUxbaODAcdYj9xmPABn4zYO37k3gy7aiLA8ODlimuhj6e/p9Z+Kbza4iuAtv+CHOERVqR6dcUIldkXkHTaOiu/KUtD/LwROH5mF4a1IND5e0PpXc0RgaT2RsS/gnbaHpb6oQ2iW7bhYx6zEdCjd3ONM5uBC4eJM7vBS4fJa6eVdSRO6o9CLxlKb5ofKaax/ieJfikkZrlGcExo3pCg/0NE3n3Y9MHhmMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"simulapp control openapi",title:"simulapp control openapi",src:"/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/3cbba/simulapp-control-openapi.png",srcSet:["/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/7fc1e/simulapp-control-openapi.png 288w","/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/a5df1/simulapp-control-openapi.png 576w","/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/3cbba/simulapp-control-openapi.png 1152w","/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/0b124/simulapp-control-openapi.png 1728w","/vaccine-solution-main/static/e9dcdde15f243d9da7479203ec0f391a/200a5/simulapp-control-openapi.png 2286w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,"Deployment"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"There are a set of required configuration elements for connectivity to IBM Event Streams (Kafka) prior to deploy this app:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A ",Object(n.b)("inlineCode",{parentName:"p"},"ConfigMap")," named ",Object(n.b)("inlineCode",{parentName:"p"},"reefer-simul-cmap"),", that you deploy with ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply -f config/configmap.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user and user secret. If you have a defined a user in the Event Streams console name ",Object(n.b)("inlineCode",{parentName:"p"},"kafka-user")," with SRAM credentials, then we need to copy the secret in the name space where the service will run. For that do the following command: "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"oc get secret kafka-user -n integration -o yaml | oc apply -f -\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A ",Object(n.b)("inlineCode",{parentName:"p"},"Secret")," named ",Object(n.b)("inlineCode",{parentName:"p"},"eventstreams-pem")," for the pem file content."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"oc create secret generic eventstreams-pem --from-file=certs/es-cert.pem\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once those elements are defined it is important to configure the app so it can retrieve those information via environment variables. With Appsody the file ",Object(n.b)("inlineCode",{parentName:"p"},"appsody-config.yaml")," is supporting these configurations. "),Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator/blob/master/app-deploy.yaml"}),"See app-deploy.yaml")))),Object(n.b)("h3",null,"Application deployment"),Object(n.b)("p",null,"The application can be deployed to a remote OpenShift cluster by using the ",Object(n.b)("inlineCode",{parentName:"p"},"appsody deploy")," command (We recommend reading ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/using-appsody/building-and-deploying/"}),"Appsody build and deploy product documentation"),"):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Deploy using the docker image on public docker hub repository:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"# login to the openshift cluster if not done already\noc login --token=rR.... --server=....\n# Deploy to the vaccine solution project\nappsody deploy -t ibmcase/vcc-reeferiotsimulator:v1.0.0 --push --namespace vaccine-solution\n")),Object(n.b)("p",null,"You can verify the deployment with the CLI"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get pods -w\n")),Object(n.b)("p",null,"or the via the Openshift console:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1137px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABWElEQVQ4y51Ti27DIBDL/3/nKrVJSQghvALxMCsTbdat60lWOOUwPnx0cpKQUsI5hzb2fX8LnVoNrDHYtg3ee1hrEYJHjPGlAxisJQphP45QSmGeZ6hFQ84LFq2xrmsuSt/Fz0gZ7I4ohK4oCkh5k3I7hE5wPmS1DiYrN8ZmcoOU0lNUcq67STuMUhUM05yhEeKOsCVscf/3nXar9VhvLYpM+DEo2JCgbYRx8WWiGpnQQaxblntvwruOd8P1CjFOxeUD0Y3sr7hTyBlkuz6EMjYV4Zb3fY9rPnQYBizLUoxiPcE1jWi76IQQGPPofDl6xPl8LmSsmaapPAJ+67olLApPpxMul0uZRSpoQRUk5H/mOpvX/md+IKRCnlbbaMFXw5arQip6iZDqfmuZCknMWpJW8HUd7pAX3l52S0aFJCO4mXU8vIL5QSGd5Mj8BL5hful4zR/xOIef4x6UxRG94hMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"simul app ocp",title:"simul app ocp",src:"/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/66ed6/simul-app-ocp.png",srcSet:["/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/7fc1e/simul-app-ocp.png 288w","/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/a5df1/simul-app-ocp.png 576w","/vaccine-solution-main/static/15bfb9c4be7886eb951c0294f0a92ead/66ed6/simul-app-ocp.png 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Appsody has defined the service and expose the application via a route."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"oc get svc\noc describe route vaccine-reefer-simulator\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To delete the deployment: ",Object(n.b)("inlineCode",{parentName:"li"},"appsody deploy delete"))),Object(n.b)("h3",null,"Continuous deployment with Tekton"),Object(n.b)("p",null,"The general approach to use Tekton to deploy the components of the solution is defined in ",Object(n.b)("a",i({parentName:"p"},{href:"../devops/cd.md#tekton-appsody-deployments"}),"this note"),"."),Object(n.b)("h2",null,"Demonstrate"),Object(n.b)("p",null,"Once deployed, you can access the Swagger-based REST API via the defined route and trigger the simulation controls."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"To determine the route, use the ",Object(n.b)("inlineCode",{parentName:"p"},"oc get route reefer-simulator")," command and go to the URL specified in the ",Object(n.b)("inlineCode",{parentName:"p"},"HOST/PORT")," field in your browser.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"From there, drill down into the ",Object(n.b)("inlineCode",{parentName:"p"},"POST /control")," section and click ",Object(n.b)("strong",{parentName:"p"},"Try it out!"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter any of the following options for the fields prepopulated in the ",Object(n.b)("inlineCode",{parentName:"p"},"control")," body: P01 is the covid-19 vaccine."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Container: ",Object(n.b)("inlineCode",{parentName:"li"},"C01, C02, C03, C04")),Object(n.b)("li",{parentName:"ul"},"Product: ",Object(n.b)("inlineCode",{parentName:"li"},"P01, P02, P03, P04")),Object(n.b)("li",{parentName:"ul"},"Simulation: ",Object(n.b)("inlineCode",{parentName:"li"},"poweroff, co2sensor, o2sensor, temperature, normal")),Object(n.b)("li",{parentName:"ul"},"Number of records: A positive integer"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Execute")))),Object(n.b)("h2",null,"More readings"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://flask-restful.readthedocs.io/en/latest/quickstart.html"}),"Flask Restful")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://appsody.dev/docs/using-appsody/building-and-deploying/"}),"Appsody build and deploy product documentation"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-reefer-iot-index-mdx-8df15d3d128316ec5cfa.js.map