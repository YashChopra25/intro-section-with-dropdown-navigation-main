pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Docker images') {
             agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'node added'
                sh '''
                    ls -la
                    node --version
                    npm --version
                '''
            }
        }
    }
}