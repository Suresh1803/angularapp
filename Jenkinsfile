node {
   
    stage ('Install dependency') {
        bat 'npm install'
    } 
    stage ('Testing Stage') {
        bat 'npx ng test --no-watch --code-coverage'
    }
   
    stage('Make Prod Build') {
        bat 'npx ng build --prod --base-href=/frontend/ && cd dist/frontend && jar -cvf frontend.war *'
    }
    stage ('Deploy on this Server') {
        deploy adapters: [tomcat9(credentialsId: '52c2dda3-aa16-4be4-a66b-d7d0f0f51bdc', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*'
    }
}
