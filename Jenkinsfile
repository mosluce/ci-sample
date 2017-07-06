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
        sh '''npm i -g yarn
yarn install'''
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Cleanup') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true)
      }
    }
  }
}