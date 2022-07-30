pipeline {
    agent any

    stages{
        
        stage('git fetch'){
            
            steps{
                git branch: 'main', url: 'https://github.com/akshay-roxiler/Play-With-Dice.git'
            }
        }
        stage('deploy to S3'){
            steps{
                withAWS(credentials: 'akshay', region: 'ap-south-1') {
                     sh 'aws s3 cp ./  s3://my-first-cicd-project-bucket --recursive' 
                }  
            }
        }
   
} }
//     post{
//         always{
//             cleanWs disableDeferredWipeout: true, deleteDirs: true
//         }
//     }
