pipeline {
    agent any
    // agent {
        // docker {
            // image "node:18"
        // }
    // }
    environment {
        dockerHome = tool "myDocker"
        mavenHome = tool "myMaven"
        PATH = "$dockerHome/bin:$mavenHome/bin:$PATH"
    }
    stages {
        stage("Checkout") {
            steps {
                echo "We have node"
                sh "node --version"
                echo "We have npm"
                sh "npm --version"
                echo "Docker Home is set to: ${dockerHome}"
                echo "Maven is set to: ${mavenHome}"
                echo "Maven is set to: ${mavenHome}"
                echo "Maven is set to: ${mavenHome}"
                echo "Maven is set to: ${mavenHome}"
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
		stage('Compile') {
			steps {
				sh "mvn clean compile"
			}
		}
		stage('Test') {
			steps {
				sh "mvn test"
			}
		}
		stage('Package') {
			steps {
				sh 'mvn package -DskipTest'
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