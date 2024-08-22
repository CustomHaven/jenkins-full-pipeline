pipeline {
    stages {
        agent {
            docker {
                image "node:18"
            }
        }
        stage("Checkout App") {
            steps {
                echo "Node version is:"
                sh "node --version"
                echo "npm version is:"
                sh "npm --version"
            }
        }
        stage("App Test") {
            steps {
                echo "npm test"
            }
        }
    stages {
        agent {
            docker {
                image "docker:20.10"
            }
        }
        stage("Checkout Docker") {
            steps {
                echo "Docker version check"
                sh "docker --version"
                echo "Docker compose check"
                sh "docker-compose --version"
            }
        }
    }
	// environment {
	// 	dockerHome = tool "myDocker"
	// 	mavenHome = tool "myMaven"
	// 	PATH = "$dockerHome/bin:$PATH"
	// }
        stage("Checkout ENV vars") {
            steps {
                echo "Path: $Path"
				echo "Build Number: $env.BUILD_NUMBER"
				echo "Build ID: $env.BUILD_ID"
				echo "Build URL: $env.BUILD_URL"
				echo "Build Tag: $env.BUILD_TAG"
				echo "Job Name: $env.JOB_NAME"
                echo "FINSIHED THESE STEPS"
            }
            post {
				always {
					echo 'I run at the end of the build stage'
				}
			}
        }
        stage("Build Docker Image") {
            steps {
                script {
                    dockerImage = docker.build("customhaven/blog_mvc:${env.BUILD_TAG}")
                }
            }
        }
        stage('Push Docker Image') {
			steps {
				script {
					docker.withRegistry('', 'dockerhub') {
						dockerImage.push()
						dockerImage.push("${env.build_TAG}")
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