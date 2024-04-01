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

    }
}
