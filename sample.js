// STRUCTURE OF DYNAMODB TABLE

/*
Id
createAt
filename
*/

// SAMPLE COMMANDS

//command to insert a file into s3
/*

sudo serverless invoke --function insertfile --log --data=' { "fileurl" : "http://www.ohchr.org/EN/UDHR/Documents/UDHR_Translations/eng.pdf", "key" : "document8.pdf" } '

*/

//command to delete file from s3

/*

sudo serverless invoke --function deletefile --log --data=' { "key" : "document8.pdf" } '

*/