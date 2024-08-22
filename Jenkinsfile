pipeline {
    agent {
        docker {
            image "node:18"
        }
    }
    environment {
        dockerHome = tool "myDocker"
    }
    stages {
        stage("Checkout") {
            steps {
                echo "We have node"
                sh "node --version"
                echo "We have npm"
                sh "npm --version"
                echo "Docker Home is set to: ${dockerHome}"  // Use the variable within steps
            }
            post {
				always {
					echo 'I run at the end of the build stage'
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