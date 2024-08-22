pipeline {
    agent any
    stages {
        stage('Checkout App') {
            agent {
                docker {
                    image "node:18"
                }
            }
            steps {
                echo "Node version is:"
                sh "node --version"
                echo "npm version is:"
                sh "npm --version"
            }
        }
        stage('App Test') {
            agent {
                docker {
                    image "node:18"
                }
            }
            steps {
                echo "Running npm test"
                sh "npm test"
            }
        }
        stage('Checkout Docker') {
            agent {
                docker {
                    image "docker:20.10"
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                echo "Docker version check"
                sh "docker --version"
                echo "Docker Compose version check"
                sh "docker-compose --version"
            }
        }
        stage('Checkout ENV vars') {
            steps {
                echo "Path: $PATH"
                echo "Build Number: $env.BUILD_NUMBER"
                echo "Build ID: $env.BUILD_ID"
                echo "Build URL: $env.BUILD_URL"
                echo "Build Tag: $env.BUILD_TAG"
                echo "Job Name: $env.JOB_NAME"
                echo "Finished these steps"
            }
            post {
                always {
                    echo 'I run at the end of the build stage'
                }
            }
        }
        stage('Build Docker Image') {
            agent {
                docker {
                    image "docker:20.10"
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                script {
                    dockerImage = docker.build("customhaven/blog_mvc:${env.BUILD_TAG}")
                }
            }
        }
        stage('Push Docker Image') {
            agent {
                docker {
                    image "docker:20.10"
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                script {
                    docker.withRegistry('', 'dockerhub') {
                        dockerImage.push()
                        dockerImage.push("${env.BUILD_TAG}")
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'I always run'
        }
        success {
            echo 'I run when successful'
        }
        failure {
            echo 'I run when failed'
        }
    }
}