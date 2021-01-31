(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+7uz":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("PageDescription"),s=l("AnchorLinks"),p=l("AnchorLink"),b={_frontmatter:r},d=o.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(d,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},"This Simulator web application is a simple python (3.7) Flask app exposing a REST POST end point to control the type of simulation we want to run and to produce refrigerator container telemetry events to kafka `telemetries` topic."),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Anatomy"),Object(n.b)(p,{mdxType:"AnchorLink"},"Build"),Object(n.b)(p,{mdxType:"AnchorLink"},"Run"),Object(n.b)(p,{mdxType:"AnchorLink"},"Usage Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("h3",null,"Application requirements"),Object(n.b)("p",null,"The simulator is not in the critical path for production like component. It is here to help us develop the other components of the solution as we do not have real life Refrigerator container. Here are the simple user stories for this app:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to start the simulator tool from command line so I can get a csv file with telemetry data")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to be able to simulate co2 sensor, o2 sensor, temperature and power sensor issue so I can get relevant data for the machine learning model to make sense")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to generate mockup telemetries data for my data scientist friend, I want to start the simulator tool from command line using parameter so I can get save data to a remote document oriented database: mongodb on IBM cloud.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to demonstrate the solution, I want to call a REST api to control the generation of faulty sensor data so I can get the scoring service returning maintenance needed.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"when I want to demonstrate the cold chain violation, I want to call a REST api to control a change to the temperature over a time period so cold chain violation can be identified with a complex event processing or AI model."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"805px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABjklEQVQoz5WSy04UURCG+4l8DXeufAwSlyxdGh/AkGgiuDImsnJB4mICsiAxIUHDQmZgei49DXNpYYCecz+f1d1hFoYRrKRybqm//v+vk/zs/ebNzi+2Wqe8/dqu11I7/o4YI4+J5OXHI5Kn73n+epcnL76QPPtAms8hRMYXU4qiWII9BjRp/chY29jn3c4xrz4dsr55wLw0OGs4OWnTaXew1i4BH8rkX92cdVjj+J9IgqD6UKFXKu/2jbTg5ey83HkWSjGZFsyKS5xzeO9xkvUq5142RkvzZBX1BjBgTCO38nLv2z7ZKG/eQqizCqUVre8dzs7N/ZKXQxC2SvxE6rL+iO3tz+T56F6pt1pShdUe3oE20iJX8xs6p91a9ngyYyhML6+uxQ6wLohsL4r8aoYNYKwLlA01qBCuwfqDjGGW0037XN+U9dvCeIyLDzOM0tUuNE4Z9O2C2XjKMB3QP0vJegNKYe61xZYKL36v/jYVy8Z9MJoo/5IqY2B+cc4k7RJlGOIJ0ci9FhNl2n8AOZ5OKt7bwxYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/56490/reefer-simul-1.png",srcSet:["/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/7fc1e/reefer-simul-1.png 288w","/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/a5df1/reefer-simul-1.png 576w","/vaccine-solution-main/static/1109ba1f0de2211ff2e394013f3dc4aa/56490/reefer-simul-1.png 805w"],sizes:"(max-width: 805px) 100vw, 805px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"The simulator needs to integrate with kafka / IBM Event Streams deployed as service on the cloud or deployed on OpenShift cluster using Cloud Pak for Integration."),Object(n.b)("h3",null,"Design approach"),Object(n.b)("p",null,"To support remote control of the simulator while running as webapp, we define a POST operation on the ",Object(n.b)("inlineCode",{parentName:"p"},"/control")," URL:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQY033RO0rEQByA8dxIPMBKwE5RUKwED2Bj5QnsXBSW9bWKheApLMVOLIQtFERw17yTnSSTly6Ln5O4ARVN8WOmmP83DKPdOk84IsAIPQxR87/tPV4VNxEEhSTI418kfhZhhj6OOqO5MkSOc+L37IcwT4je0kpYJIi8JP+QMEpjBq6NJ1VwGFg4qcCasqfrs2diyAAnj4g+ChLGjXImiEmGZqkhVw1VshCviLGSEb2LS9qdQzonZ7S7R432Do7Z2d3n6uZaPVmFHBWqlUEj8tnc2mZ1bYPllXXm9EVa+sK/9PklZmZbdE/P0cqIW8W+wvUF948P3PX7vNgGA99mqD6tkXAx5YhPV+adlsKgtqsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/3cbba/simulapp-control-swagger.png",srcSet:["/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/7fc1e/simulapp-control-swagger.png 288w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/a5df1/simulapp-control-swagger.png 576w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/3cbba/simulapp-control-swagger.png 1152w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/0b124/simulapp-control-swagger.png 1728w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/4ea69/simulapp-control-swagger.png 2304w","/vaccine-solution-main/static/df4bf1fa6d1cab5aeaea4644b9bd6fd1/07adc/simulapp-control-swagger.png 2788w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null," The Json control object defines the number records to produce, the sensor to impact (co2sensor, temperature, o2sensor, power) , the container ID, (one of C01, C02, C03, C04) which carries the product referenced by product_id (one of P01, P02, P03, P04, P05, covid-19) - The P01 is the covid-19 vaccine:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-json"}),"    { 'containerID': 'C02',\n    'simulation': 'temperature',\n    'nb_of_records': 4000,\n    \"product_id\":  \"covid-19\"\n    }\n")),Object(n.b)("p",null,"We have tried to support a domain driven design approach to structure the code, with domain, infrastructure and app modules. The domain module has a unique class for the simulator which main goal is to generate data tuples or records for the different simulation types. It is reused by the standalone simulation CLI tool to generate data at rest, if needed."),Object(n.b)("p",null,"As the simulator is also a webapp we need to package it with ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.fullstackpython.com/flask.html"}),"Flask")," and run it using one of the Web Server Gateway Interface (WSGI) implementation, like ",Object(n.b)("a",i({parentName:"p"},{href:"http://docs.gunicorn.org/"}),"Gunicorn"),"."),Object(n.b)("p",null,"If you want to go over the code, ee recommend to follow ",Object(n.b)("a",i({parentName:"p"},{href:"https://flask.palletsprojects.com/en/1.1.x/tutorial/"}),"Flask tutorial"),"."),Object(n.b)("p",null,"Flask is a simple library to implement REST based microservice and web application in Python. It has other related projects to add interesting features to develop production ready application. The standard development includes defining routes, function to support handling the request and generating HTTP response, but also defining APIs… Read more with the ",Object(n.b)("a",i({parentName:"p"},{href:"http://exploreflask.com/en/latest/"}),"explore Flask book online"),"."),Object(n.b)("p",null,"Flask is mono threaded so it fits well in a simple web application for development purpose, but for production it is recommended to add a web server like ",Object(n.b)("a",i({parentName:"p"},{href:"https://gunicorn.org/"}),"Gunicorn")," to handle multiple concurrent requests."),Object(n.b)("h2",null,"Anatomy"),Object(n.b)("p",null,"The app is done using Flask, blueprint, flasgger, flask_restful, prometheus, confluent_kafka."),Object(n.b)("p",null,"The app.py Flask application imports the different blue prints, server the apidoc and starts the server. Each ",Object(n.b)("a",i({parentName:"p"},{href:"https://flask.palletsprojects.com/en/1.1.x/blueprints/"}),"Flask blueprints")," is defined in the ",Object(n.b)("inlineCode",{parentName:"p"},"api")," folder. "),Object(n.b)("p",null,"The basic concept of blueprints is that they record operations to execute when each operation is registered on an application. So to add one operation to support a new control, we add a blueprint, and then register it in the main application: ",Object(n.b)("inlineCode",{parentName:"p"},"app.py"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from api.controller import control_blueprint\napp.register_blueprint(control_blueprint)\n")),Object(n.b)("p",null,"To define the API, we use ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/flasgger/flasgger"}),"Flasgger")," as an extension to Flask to extract ",Object(n.b)("a",i({parentName:"p"},{href:"https://swagger.io/docs/specification/about/"}),"Open API specification")," from the code. It comes with Swagger UI, so we can see the API documentation of the microservice at the URL ",Object(n.b)("inlineCode",{parentName:"p"},"/apidocs"),".  It can also validate the data according to the schema defined."),Object(n.b)("p",null,"For the POST ",Object(n.b)("inlineCode",{parentName:"p"},"/control")," we defined the Swagger 2.0 API in a separate file: ",Object(n.b)("inlineCode",{parentName:"p"},"api/controlapi.yml")," and import it at the method level to support the POST operation. This method is defined in its blueprint as a REST resource. The code ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator/blob/master/simulator/api/controller.py"}),"controller.py")," is under ",Object(n.b)("inlineCode",{parentName:"p"},"api")," folder."),Object(n.b)("p",null,"Below is a code extract to illustrate the use of Flask-RESTful and blueprint and the swagger annotation:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),'from flasgger import swag_from\nfrom flask_restful import Resource, Api\n\ncontrol_blueprint = Blueprint("control", __name__)\napi = Api(control_blueprint)\n\nclass SimulationController(Resource):\n    @swag_from(\'controlapi.yml\')\n    def post(self):\n        # ..\napi.add_resource(SimulationController, "/control")\n')),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator/blob/master/Pipfile"}),"Pipfile")," defines the dependencies for this component, and is used by ",Object(n.b)("inlineCode",{parentName:"p"},"pipenv")," during the docker build process."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Github repository:")," ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator"}),"vaccine-reefer-simulator")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics produced to:")," telemetries"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Event sents to the topic:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),'{"containerID": metric[0],\n"timestamp": str(metric[1]),\n"type":"ReeferTelemetries",\n"payload"={ "timestamp": "2019-09-04 T15:31 Z",\n            "containerID": "C101",\n            "product_id": "P02",\n            "sensors": {\n              "temperature": 2.49647,\n              "oxygen_level" : 20.4543,\n              "nitrogen_level" : 79.4046,\n              "carbon_dioxide_level" : 4.42579,\n              "humidity_level" : 60.3148,\n              "fan_1": "True",\n              "fan_2" : "True",\n              "fan_3" : "True",\n              "ambiant_temperature": 19.8447\n            },\n            "content_type": 1,\n            "target_temperature": 6.0,\n            "kilowatts": 3.44686,\n            "latitude": "37.8226902168957,",\n            "longitude": "-122.3248956640928",\n            "time_door_open" : 300,\n            "defrost_cycle": 6\n        }\n}\n')),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"This microservice is built using the docker:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"docker build -t ibmcase/vaccine-reefer-simulator .\ndocker push ibmcase/vaccine-reefer-simulator\n")),Object(n.b)("h2",null,"Run"),Object(n.b)("h3",null,"Run locally with remote Event Streams on OCP"),Object(n.b)("p",null,"See the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator#run-locally"}),"readme in the repository")," to execute the python app within a Dockerfile and remote connected to Evenstreams on OpenShift."),Object(n.b)("h3",null,"Deployment to OpenShift"),Object(n.b)("p",null,"We have moved the description on how to deploy to OpenShift in the ",Object(n.b)("a",i({parentName:"p"},{href:"/vaccine-solution-main/use-cases/cold-chain/#deploy-the-vaccine-reefer-simulator"}),"cold chain scenario"),". "),Object(n.b)("h2",null,"Demonstrate"),Object(n.b)("p",null,"Once deployed, you can access the Swagger-based REST API via the defined route and trigger the simulation controls."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"To determine the route, use the ",Object(n.b)("inlineCode",{parentName:"p"},"oc get route reefer-simulator")," command and go to the URL specified in the ",Object(n.b)("inlineCode",{parentName:"p"},"HOST/PORT")," field in your browser.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"From there, drill down into the ",Object(n.b)("inlineCode",{parentName:"p"},"POST /control")," section and click ",Object(n.b)("strong",{parentName:"p"},"Try it out!"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter any of the following options for the fields prepopulated in the ",Object(n.b)("inlineCode",{parentName:"p"},"control")," body: P01 is the covid-19 vaccine."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Container: ",Object(n.b)("inlineCode",{parentName:"li"},"C01, C02, C03, C04")),Object(n.b)("li",{parentName:"ul"},"Product: ",Object(n.b)("inlineCode",{parentName:"li"},"P01, P02, P03, P04")),Object(n.b)("li",{parentName:"ul"},"Simulation: ",Object(n.b)("inlineCode",{parentName:"li"},"poweroff, co2sensor, o2sensor, temperature, normal")),Object(n.b)("li",{parentName:"ul"},"Number of records: A positive integer"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Execute")))),Object(n.b)("h2",null,"More readings"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://flask-restful.readthedocs.io/en/latest/quickstart.html"}),"Flask Restful")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://appsody.dev/docs/using-appsody/building-and-deploying/"}),"Appsody build and deploy product documentation"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-reefer-iot-index-mdx-0c6ae5ee036094bd9eb5.js.map