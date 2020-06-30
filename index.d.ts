// Type definition for aws-xray-sdk
declare module 'aws-xray-sdk' {
  function captureAWSClient<T>(client: T): T;

  function captureAWS<T>(client: T): T;

  function captureHTTPs(module: any, downstreamXRayEnabled: boolean): void;

  function captureHTTPsGlobal(module: any, downstreamXRayEnabled: boolean): void;
}