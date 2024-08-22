pipeline {
    agent any
    // agent {
        // docker {
            // image "node:18"
            // args '-v /var/run/docker.sock:/var/run/docker.sock'
        // }
    // }
    environment {
        dockerHome = tool "myDocker"
		nodeHome = tool "myNodeJS"
		PATH = "$dockerHome/bin:$nodeHome/bin:$PATH"
    }
    stages {
        stage("Checkout") {
            steps {
                echo "Docker Home"
                sh "docker --version"
                echo "We have node"
                sh "node --version"
                echo "We have npm"
                sh "npm --version"
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
                    echo "location before"
                    sh "pwd"
                    sh "cd ./pokemon-mvc"
                    echo "current location"
                    sh "pwd"
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