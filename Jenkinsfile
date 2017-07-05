pipeline {
  agent {
    docker {
      args '-u root'
      image 'node:8.1.0'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''echo 'Building...'
'''
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh '''echo 'Testing...'
'''
        sh 'npm test'
      }
    }
  }
}