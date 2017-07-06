pipeline {
  agent {
    docker {
      image 'node:8.1.0'
      args '-u root'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'rm package-lock.json'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
