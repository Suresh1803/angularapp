pipeline {
      agent any
    tools {
        nodejs 'node'
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    bat 'npm install'
                }
            }
        }
 stage ('Build') {
      steps {
        bat ' ng build --watch --base-href=/angularapp/ && cd dist/angularapp && jar -cvf angularapp.war *'
      }
    }
       
    
      stage ('Deploy') {
      steps {
        script {
        deploy adapters: [tomcat9(credentialsId: '52c2dda3-aa16-4be4-a66b-d7d0f0f51bdc', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*'
        }
      }
    }

  }
}
