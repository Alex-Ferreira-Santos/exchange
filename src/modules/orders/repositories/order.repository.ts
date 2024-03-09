import { PrismaService } from 'src/modules/prisma/prisma.service'
import { Order } from '../entities/order.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OrderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOrder(order: Order) {
    const createdOrder = await this.prismaService.order.create({
      data: {
        order_id: order.order_id,
        amount: order.amount,
        item_id: order.item_id,
        item_type: order.item_type,
        price_per_unit: order.price_per_unit,
        situation: order.situation,
        type: order.type,
        client_id: order.client_id
      }
    })
    return createdOrder
  }

  async listOrdersByClientId(client_id: string) {
    const orders = await this.prismaService.order.findMany({
      where: {
        client_id: { equals: client_id }
      }
    })
    return orders
  }

  async getOrderById(order_id: string) {
    const foundOrder = await this.prismaService.order.findFirstOrThrow({
      where: {
        order_id: { equals: order_id }
      }
    })
    return foundOrder
  }

  async updateOrderSituation(order: Order) {
    const foundOrder = await this.prismaService.order.update({
      where: {
        order_id: order.order_id
      },
      data: {
        situation: order.situation
      }
    })
    return foundOrder
  }
}
