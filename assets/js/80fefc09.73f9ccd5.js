"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[215],{9613:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,s(s({ref:e},l),{},{components:n})):r.createElement(d,s({ref:e},l))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1646:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>u});var r=n(2245),o=n(5903),a=(n(9496),n(9613)),s=["components"],i={id:"custom",title:"Custom Parsers"},c=void 0,p={unversionedId:"nestjs/custom",id:"nestjs/custom",isDocsHomePage:!1,title:"Custom Parsers",description:"To create a custom parser, you can either extend an existing parser and override any of the methods, such as the getCallerIp() if you need to get a value other than req.ip in the @ogma/platform-express parser, or you can create your own class that extends AbstractInterceptorService or implements InterceptorService. All of the methods of these classes and interfaces have appropriate typings and doc strings to help with creating your own parser if you want to work with a system that is not directly yet supported.",source:"@site/docs/nestjs/custom.md",sourceDirName:"nestjs",slug:"/nestjs/custom",permalink:"/ogma/docs/nestjs/custom",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/custom.md",tags:[],version:"current",frontMatter:{id:"custom",title:"Custom Parsers"},sidebar:"mySidebar",previous:{title:"Platform WS",permalink:"/ogma/docs/nestjs/ws/ws"},next:{title:"CLI",permalink:"/ogma/docs/cli"}},l=[{value:"Logging Additional Data",id:"logging-additional-data",children:[],level:2},{value:"Other Abstract Classes",id:"other-abstract-classes",children:[],level:2}],m={toc:l};function u(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To create a custom parser, you can either ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," an existing parser and override any of the methods, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"getCallerIp()")," if you need to get a value other than ",(0,a.kt)("inlineCode",{parentName:"p"},"req.ip")," in the ",(0,a.kt)("a",{parentName:"p",href:"./http/platform-express"},(0,a.kt)("inlineCode",{parentName:"a"},"@ogma/platform-express"))," parser, or you can create your own class that ",(0,a.kt)("inlineCode",{parentName:"p"},"extends AbstractInterceptorService")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"implements InterceptorService"),". All of the methods of these classes and interfaces have appropriate typings and doc strings to help with creating your own parser if you want to work with a system that is not directly yet supported."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface InterceptorService {\n  getSuccessContext(\n    data: number,\n    context: ExecutionContext,\n    startTime: number,\n    options: OgmaInterceptorServiceOptions\n  ): LogObject;\n\n  getErrorContext(\n    error: Error | HttpException,\n    context: ExecutionContext,\n    startTime: number,\n    options: OgmaInterceptorServiceOptions\n  ): LogObject;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class AbstractInterceptorService\n  implements InterceptorService\n{\n  constructor(protected readonly reflector: Reflector) {}\n\n  /**\n   * A method to transform the incoming execution context into metadata that the OgmaInterceptor will then log.\n   * This method handles the success cases\n   * @param dataLength the buffer length of the data\n   * @param context the execution context from Nest\n   * @param startTime when the request started\n   * @param options the options passed to the interceptor\n   * @returns an object that represents what should be logged\n   */\n  getSuccessContext(\n    dataLength: number,\n    context: ExecutionContext,\n    startTime: number,\n    options: OgmaInterceptorServiceOptions\n  ): LogObject {\n    return {\n      callerAddress: this.getCallerIp(context),\n      method: this.getMethod(context),\n      callPoint: this.getCallPoint(context),\n      responseTime: this.getResponseTime(startTime),\n      contentLength: dataLength,\n      protocol: this.getProtocol(context),\n      status: this.getStatus(context, options.color && !options.json)\n    };\n  }\n\n  /**\n   * A method to transform the incoming execution context into metadata that the OgmaInterceptor will then log.\n   * This method handles the error cases\n   * @param error the error that happened\n   * @param context the execution context from Nest\n   * @param startTime when the request started\n   * @param options the options passed to the interceptor\n   * @returns an object that represents what should be logged\n   */\n  getErrorContext(\n    error: Error | HttpException,\n    context: ExecutionContext,\n    startTime: number,\n    options: OgmaInterceptorServiceOptions\n  ): LogObject {\n    return {\n      callerAddress: this.getCallerIp(context),\n      method: this.getMethod(context),\n      callPoint: this.getCallPoint(context),\n      status: this.getStatus(\n        context,\n        options.color && !options.json,\n        error\n      ),\n      responseTime: this.getResponseTime(startTime),\n      contentLength: Buffer.from(JSON.stringify(error.message))\n        .byteLength,\n      protocol: this.getProtocol(context)\n    };\n  }\n\n  /**\n   * A helper method to get the status based on if the request was an error or success\n   * @param context the execution context\n   * @param inColor if the status should be in color\n   * @param error if it was an error\n   * @returns a string representing the status\n   */\n  getStatus(\n    _context: ExecutionContext,\n    inColor: boolean,\n    error?: HttpException | Error\n  ): string {\n    const status = error ? 500 : 200;\n    return inColor ? this.wrapInColor(status) : status.toString();\n  }\n\n  /**\n   * A helper method to allow devs the ability to pass in extra metadata when it comes to the interceptor\n   * @param context The ExecutionContext\n   * @returns whatever metadata you want to add in on a second log line. This can be a string, an object, anything\n   */\n  getMeta(_context: ExecutionContext): unknown {\n    return;\n  }\n\n  /**\n   * A helper method to get the Ip of the calling client\n   * @param context the execution context\n   */\n  abstract getCallerIp(context: ExecutionContext): string[] | string;\n\n  /**\n   * A helper method to get the method type of the request\n   *\n   * REST: an HTTP Verb (GET, POST, PATCH, etc)\n   *\n   * GraphQL: Query, Mutation, or Subscription\n   *\n   * Microservice: Request or Reply\n   *\n   * Websockets: unknown at momentHTTP: HTTP Verb\n   *\n   * @param context the execution context\n   */\n  abstract getMethod(context: ExecutionContext): string;\n\n  private getResponseTime(startTime: number): number {\n    return Date.now() - startTime;\n  }\n\n  /**\n   * A helper method to get the protocol of the request\n   * @param context execution context from Nest\n   */\n  abstract getProtocol(context: ExecutionContext): string;\n\n  /**\n   * A helper method to get what was called\n   *\n   * REST: endpoint\n   *\n   * GraphQL: Query or Mutation name\n   *\n   * Microservice: Message Topic\n   *\n   * WebSockets: Subscription Event name\n   * @param context execution context from Nest\n   */\n  abstract getCallPoint(context: ExecutionContext): string;\n\n  /**\n   * A helper method for setting the correlationId to later be retrieved when logging\n   * @param context the execution context\n   * @param requestId the correlationId to set\n   */\n  abstract setRequestId(\n    context: ExecutionContext,\n    requestId: string\n  ): void;\n\n  protected wrapInColor(status: number): string {\n    let statusString: string;\n    if (this.isBetween(status, 100, 300)) {\n      statusString = style.green.apply(status);\n    } else if (this.isBetween(status, 300, 400)) {\n      statusString = style.cyan.apply(status);\n    } else if (this.isBetween(status, 400, 500)) {\n      statusString = style.yellow.apply(status);\n    } else if (this.isBetween(status, 500, 600)) {\n      statusString = style.red.apply(status);\n    } else {\n      statusString = style.white.apply(status);\n    }\n    return statusString;\n  }\n\n  protected isBetween(\n    comparator: number,\n    bottom: number,\n    top: number\n  ): boolean {\n    return comparator >= bottom && comparator < top;\n  }\n}\n")),(0,a.kt)("h2",{id:"logging-additional-data"},"Logging Additional Data"),(0,a.kt)("p",null,"If you would like to log extra data, such as the request body, you can extend any of the existing parsers, or create your own, and add the logic to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getMeta")," method. This extra metadata will be logged out on a second line with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassName#handlerMethod")," context and the same ",(0,a.kt)("inlineCode",{parentName:"p"},"correlationId")," for easy tracking."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is only available in ",(0,a.kt)("inlineCode",{parentName:"p"},"@ogma/nestjs-module@3.1.0")," and higher"))),(0,a.kt)("h2",{id:"other-abstract-classes"},"Other Abstract Classes"),(0,a.kt)("p",null,"There are also abstract classes already created for each transport type, ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GQL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WS"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"RPC"),". Each of which can be used instead of extending from the base ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractInterceptorService")," class if you so choose. This helps with needing to implement the minimum amount of logic for the parser."))}u.isMDXComponent=!0}}]);