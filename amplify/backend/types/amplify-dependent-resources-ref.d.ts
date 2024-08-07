export type AmplifyDependentResourcesAttributes = {
  "auth": {
    "ekycappa21f6b6d": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "hosting": {
    "S3AndCloudFront": {
      "CloudFrontDistributionID": "string",
      "CloudFrontDomainName": "string",
      "CloudFrontOriginAccessIdentity": "string",
      "CloudFrontSecureURL": "string",
      "HostingBucketName": "string",
      "Region": "string",
      "S3BucketSecureURL": "string",
      "WebsiteURL": "string"
    }
  },
  "predictions": {
    "faceId": {
      "celebrityDetectionEnabled": "string",
      "maxEntities": "string",
      "region": "string"
    },
    "textID": {
      "format": "string",
      "region": "string"
    },
    "textInterpret": {
      "region": "string",
      "type": "string"
    }
  }
}