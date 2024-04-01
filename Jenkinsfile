pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

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
                    sh 'ng build --watch'
                }
            }
        }

        stage('Create WAR file') {
            steps {
                script {
                    // Create WAR file from the dist directory
                    dir('dist') {
                        // Zip the contents of the dist directory
                        sh 'zip -r angularapp.war *'
                    }
                    // Move the WAR file to workspace root
                    sh 'mv dist/angularapp.war .'
                }
            }
        }

        stage('Deploy to Tomcat') {
            steps {
                script {
                    // Copy WAR file to Tomcat webapps directory
                    sh 'cp myapp.war D:/softwares/apache-tomcat-9.0.64/webapps'
                }
            }
        }
    }

  
}
