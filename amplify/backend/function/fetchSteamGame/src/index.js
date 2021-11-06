/* Amplify Params - DO NOT EDIT
	API_AWSREACTALPHA_GAMETABLE_ARN
	API_AWSREACTALPHA_GAMETABLE_NAME
	API_AWSREACTALPHA_GRAPHQLAPIENDPOINTOUTPUT
	API_AWSREACTALPHA_GRAPHQLAPIIDOUTPUT
	API_AWSREACTALPHA_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
