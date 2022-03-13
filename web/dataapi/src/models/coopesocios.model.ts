import {Entity, model, property} from '@loopback/repository';
import {db2config} from '../datasources/env';

@model({
  settings: {idInjection: false, db2: {schema: db2config.schema, table: 'COOPESOCIOS'}}
})
export class Coopesocios extends Entity {
  @property({
    type: 'boolean',
    length: 1,
    // precision: ,
    scale: 0,
    db2: {columnName: 'ACTIVO', dataType: 'BOOLEAN', dataLength: 1, dataPrecision: undefined, dataScale: 0, nullable: 'Y'},
  })
  activo?: boolean;

  @property({
    type: 'string',
    required: true,
    length: 15,
    // precision: ,
    scale: 0,
    // id: 1,
    db2: {columnName: 'CODEMPLEADO', dataType: 'CHARACTER', dataLength: 15, dataPrecision: undefined, dataScale: 0, nullable: 'N'},
  })
  codempleado: string;

  @property({
    type: 'string',
    required: true,
    length: 5,
    // precision: ,
    scale: 0,
    db2: {columnName: 'CODPAIS', dataType: 'CHARACTER', dataLength: 5, dataPrecision: undefined, dataScale: 0, nullable: 'N'},
  })
  codpais: string;

  @property({
    type: 'string',
    length: 10,
    // precision: ,
    scale: 0,
    db2: {columnName: 'COMPANY', dataType: 'CHARACTER', dataLength: 10, dataPrecision: undefined, dataScale: 0, nullable: 'Y'},
  })
  company?: string;

  @property({
    type: 'string',
    length: 70,
    // precision: ,
    scale: 0,
    db2: {columnName: 'EMAILEMPLEADO', dataType: 'CHARACTER', dataLength: 70, dataPrecision: undefined, dataScale: 0, nullable: 'Y'},
  })
  emailempleado?: string;

  @property({
    type: 'date',
    length: 13,
    // precision: ,
    scale: 12,
    db2: {columnName: 'FECMODIFICACION', dataType: 'TIMESTAMP', dataLength: 13, dataPrecision: undefined, dataScale: 12, nullable: 'Y'},
  })
  fecmodificacion?: string;

  @property({
    type: 'boolean',
    length: 1,
    // precision: ,
    scale: 0,
    db2: {columnName: 'INBLUEPAGES', dataType: 'BOOLEAN', dataLength: 1, dataPrecision: undefined, dataScale: 0, nullable: 'Y'},
  })
  inbluepages?: boolean;

  @property({
    type: 'boolean',
    length: 1,
    // precision: ,
    scale: 0,
    db2: {columnName: 'ISADMIN', dataType: 'BOOLEAN', dataLength: 1, dataPrecision: undefined, dataScale: 0, nullable: 'Y'},
  })
  isadmin?: string;

  @property({
    type: 'string',
    required: true,
    length: 70,
    // precision: ,
    scale: 0,
    db2: {columnName: 'NOMBREEMPLEADO', dataType: 'CHARACTER', dataLength: 70, dataPrecision: undefined, dataScale: 0, nullable: 'N'},
  })
  nombreempleado: string;

  @property({
    type: 'string',
    //hidden: true,
    required: true,
    length: 40,
    // precision: ,
    scale: 0,
    id: 1,
    db2: {columnName: 'UUID', dataType: 'CHARACTER', dataLength: 40, dataPrecision: undefined, dataScale: 0, nullable: 'N'},
  })
  uuid: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Coopesocios>) {
    super(data);
  }
}

export interface CoopesociosRelations {
  // describe navigational properties here
}

export type CoopesociosWithRelations = Coopesocios & CoopesociosRelations;
