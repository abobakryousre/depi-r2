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
        stage("Test"){
            parallel {

                stage ("Unit Test"){
                    steps {
                        echo "Unit Test"
                    }
                }
                stage ("Integration Test"){
                    steps {
                        echo "Intergration Test"
                    }
                }
                stage ("E2E testing") {
                    stages {
                    stage ("E2E Testin: Backend") {
                        steps {
                            echo "testing backend"
                        }
                    }
                    stage ("E2E Testin: Database") {
                        steps {
                            echo "testing Database"
                        }
                    }
                }
                }
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
        stage("Deploy"){
            steps {
            sh 'docker stop my-app 2> /dev/null || true'
            sh 'docker rm my-app 2> /dev/null || true'
            sh 'docker run --name my-app abobakryousre/my-app:$BUILD_NUMBER'
            }
        }
    }
}
