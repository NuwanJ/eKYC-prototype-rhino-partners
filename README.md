# eKYC Prototype - Rhino Partners

This is a prototype application for automated eKYC, with face detection, liveness identification, and identity document verification.

![image](https://github.com/user-attachments/assets/519e09bb-041d-4811-88d1-aef4d8c6b9bf)


## API Services 

### Services for identifying ID documents 

1. AWS Rekognition Custom Labels
AutoML tool. With a small train dataset (few hundred or less), this can be used to detect contents on business documents (Field Data Extraction). Also provides a visual interface for labeling the data via AWS SageMaker Ground Truth. 

> Use Case: Identify the document type (Whether NIC / Passport / …) and Field Data Extraction

2. AWS Rekognition Detect Face API / Compare Face API

> Use Case: Extract the Face image from the submitted documents to verify/compare the camera-captured personal images

3. AWS Textract 
Extract business data from the documents, forms 

Supports 
- OCR
- Signature Detection (bounding box as the result)
- Form Extraction (Key-Value sets)
- Query-based extraction (Answer to `What is the name?`)
- Identity Documents (US Only)


### Services to identify the un-edited images 

1. Google’s Document AI

Direct support for Identity Document Proofing 
https://cloud.google.com/blog/products/ai-machine-learning/text-and-insights-directly-from-your-scans-and-photos/

> User Case: Identity Proofing


### Services to identify the persons 

1. AWS Rekognition Detecting face liveness API  
Face Liveness Recognition, Supports React with AWS Amplify 
	
> User Case: Identify the liveness of a person
