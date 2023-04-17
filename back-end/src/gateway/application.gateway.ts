import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
  WsException,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { INCREASE_EVENT } from './constance';
@WebSocketGateway({ namespace: 'client', cors: true })
export class Application
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger(Application.name);

  @WebSocketServer() server: Server;
  constructor() {}
  afterInit(server: Server) {
    this.logger.verbose('Chat gateway initialized successfuly 🐥🐥🐥🐥🐥');
  }

  async handleConnection(client: Socket) {
    this.logger.debug(`client ${client.id} connected to our server🏪🏪🏪🏪`);
  }

  handleDisconnect(client: Socket) {
    this.logger.debug(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage(INCREASE_EVENT)
  handleBlue(
    @ConnectedSocket() client: Socket,
    @MessageBody('color') color: string,
  ) {
    this.logger.debug(
      `Client [${client.id}] clicked to [${color}] button ${
        color == 'blue' ? '💙💙💙💙' : '🧡🧡🧡🧡'
      }`,
    );
    this.server.emit(`increase-${color}`, { data: 1 });
  }
}
