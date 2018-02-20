import * as lambda from 'aws-lambda';
import * as sourceMapSupport from 'source-map-support';
import { EC2 } from 'aws-sdk';
import Ec2Service from '../service/Ec2Service';

sourceMapSupport.install();

const ec2Client = new EC2();

/**
 * 全てのEC2インスタンスを停止させる
 *
 * @param {ScheduledEvent} event
 * @param {Context} context
 * @param {Callback} callback
 * @returns {Promise<void>}
 */
export const haltInstances = async (
  event: lambda.ScheduledEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  await Ec2Service.haltInstances(ec2Client);

  return callback();
};

/**
 * 全てのEC2インスタンスを起動させる
 *
 * @param {ScheduledEvent} event
 * @param {Context} context
 * @param {Callback} callback
 * @returns {Promise<void>}
 */
export const upInstances = async (
  event: lambda.ScheduledEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  await Ec2Service.upInstances(ec2Client);

  return callback();
};
