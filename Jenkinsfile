pipeline {
     agent any
    environment {
        NODEJS_HOME = tool 'node'
        PATH = "$NODEJS_HOME/bin:$PATH"
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
        bat 'npm run build --watch'
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
