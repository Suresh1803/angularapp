pipeline {
    agent any


        stage('Install dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build Angular app
                    sh 'ng build --prod'
                }
            }
        }

       

        stage('Deploy to Tomcat') {
            steps {
                script {
                    // Copy WAR file to Tomcat webapps directory
                    deploy adapters: [tomcat9(credentialsId: '52c2dda3-aa16-4be4-a66b-d7d0f0f51bdc', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*'
                }
            }
        }
    }

   
}
