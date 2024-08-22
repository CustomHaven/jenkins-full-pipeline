pipeline {
    agent {
        docker {
            image "node:18"
        }
    }
    environment {
        dockerHome = tool "myDocker"
        echo "$dockerHome"
    }
    stages {
        stage("Checkout") {
            steps {
                echo "We have node"
                sh "node --version"
                echo "We have npm"
                sh "npm --version"

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