node {

     def path_install="/opt/webserver/www/"

     stage('Preparation') {
         checkout scm
     }

     stage('NPM Install') {
        sh "npm install"
     }

     stage('Build WebApp') {
        sh "ng build --configuration dev --base-href ."
     }

     stage('Install WebApp') {
         sh "ssh dbpostgres@localhost mkdir -p '${path_install}'"
         sh "scp -r dist/. dbpostgres@localhost:'${path_install}'"
     }

 }