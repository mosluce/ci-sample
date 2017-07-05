pipeline {
  agent {
    docker {
      image 'node:8.1.0'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}