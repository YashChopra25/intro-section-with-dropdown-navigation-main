pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Docker ') {
            agent {
                docker {
                    image 'node:18-alphine'
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