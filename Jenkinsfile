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
        sh 'npm i -g yarn'
        sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
