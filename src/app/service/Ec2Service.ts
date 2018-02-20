import { EC2 } from 'aws-sdk';
import { Reservation, Instance } from 'aws-sdk/clients/ec2';
import { Logger } from '../../infrastructure/Logger';

/**
 * Ec2Service
 *
 * @author keita-koga
 * @since 2018-02-20
 */
export default class Ec2Service {

  /**
   * 起動中のEC2インスタンスを全て停止させる
   *
   * @param {EC2} ec2Client
   * @returns {Promise<void>}
   */
  public static async haltInstances(ec2Client: EC2) {
    const instanceIdList = await Ec2Service.fetchInstanceIdList(ec2Client);

    return await Ec2Service.stopInstances(ec2Client, instanceIdList).catch((error) => {
      Logger.critical(error);
    });
  }

  /**
   * 停止中のEC2インスタンスを全て起動させる
   *
   * @param {EC2} ec2Client
   * @returns {Promise<void>}
   */
  public static async upInstances(ec2Client: EC2) {
    const instanceIdList = await Ec2Service.fetchInstanceIdList(ec2Client);

    await Ec2Service.startInstances(ec2Client, instanceIdList).catch((error) => {
      Logger.critical(error);
    });
  }

  /**
   * インスタンスID一覧を取得する
   *
   * @param {EC2} ec2Client
   * @returns {Promise<string[]>}
   */
  private static async fetchInstanceIdList(ec2Client: EC2): Promise<string[]> {
    const response: EC2.Types.DescribeInstancesResult = await ec2Client.describeInstances().promise();

    if (response.Reservations == null) {
      return Promise.resolve([]);
    }

    const instanceIdList: string[] = [];

    response.Reservations.forEach((reservation: Reservation) => {
      if (reservation.Instances == null) {
        return;
      }

      reservation.Instances.forEach((instance: Instance) => {
        if (instance.InstanceId != null) {
          instanceIdList.push(instance.InstanceId);
        }
      });
    });

    return instanceIdList;
  }

  /**
   * インスタンスを停止させる
   *
   * @param {EC2} ec2Client
   * @param {string[]} instanceIdList
   * @returns {Promise<void>}
   */
  private static async stopInstances(ec2Client: EC2, instanceIdList: string[]) {
    const params = {
      InstanceIds: instanceIdList,
      Force: true,
    };

    await ec2Client.stopInstances(params).promise();
  }

  /**
   * インスタンスを起動させる
   *
   * @param {EC2} ec2Client
   * @param {string[]} instanceIdList
   * @returns {Promise<void>}
   */
  private static async startInstances(ec2Client: EC2, instanceIdList: string[]) {
    const params = {
      InstanceIds: instanceIdList,
    };

    await ec2Client.startInstances(params).promise();
  }
}
