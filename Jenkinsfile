pipeline {
    agent any

    stages {
        stage('Ceckout Code') {
            steps {
                echo "getting code from github ....."
                git branch: 'main', credentialsId: 'gitUser', url: 'https://github.com/abobakryousre/depi-r2.git'
            }
        }
        stage("Build"){
            steps {
                sh 'docker build . -t abobakryousre/my-app:$BUILD_NUMBER'
            }
        }
        stage("Unit Test"){
            steps {
                sh 'docker run abobakryousre/my-app:$BUILD_NUMBER echo testing..... '
                
            }
        }
        stage("Integration Test"){
            steps {
                sh 'docker run abobakryousre/my-app:$BUILD_NUMBER echo testing..... '
                
            }
        }
        stage("E2E Test"){
            steps {
                sh 'docker run abobakryousre/my-app:$BUILD_NUMBER echo testing..... '
                
            }
        }
        stage("Release"){
            steps {
  
                
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerPass', usernameVariable: 'dockerUser')]) {
                    sh "echo $dockerPass"
                    sh ' echo $dockerPass | docker login -u $dockerUser --password-stdin'
                    sh 'docker push abobakryousre/my-app:$BUILD_NUMBER'
        }
                
                
                
            }
        }
    }
}
