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
                    bat 'rmdir /s /q dist'
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
         bat 'xcopy /S /Y "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\angularapp\\dist\\angular-stepperdemo\\browser\\*" "D:\\softwares\\apache-tomcat-9.0.64\\webapps\\ROOT\\"'
        }
      }
    }

  }
}
