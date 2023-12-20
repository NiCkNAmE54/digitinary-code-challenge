import { INestApplication } from "@nestjs/common";

import { SWAGGER_CONFIG } from "./swagger.config";
import { OpenAPIObject, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


export function createdocument(app: INestApplication): OpenAPIObject {
    const builder = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
    .setVersion(SWAGGER_CONFIG.version);
    for (const tag of SWAGGER_CONFIG.tags) {
        builder.addTag(tag);
      }
      const options = builder.build();
    
      return SwaggerModule.createDocument(app, options);
}