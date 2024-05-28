import React from 'react';
import { Handle } from 'react-flow-renderer';
import awsMqIcon from '../icons/aws_mq_broker-icon.png';
import awsElasticacheIcon from '../icons/aws_elasticache_cluster-icon.png';
import awsS3Icon from '../icons/aws_s3_bucket-icon.png';
import publicIcon from '../icons/public-icon.png';
import privateIcon from '../icons/private-icon.png';

const icons = {
  aws_mq_broker: awsMqIcon,
  aws_elasticache_cluster: awsElasticacheIcon,
  aws_s3_bucket: awsS3Icon,
};

const accessIcons = {
  public: publicIcon,
  private: privateIcon,
};

const ResourceNode = ({ data }) => {
  const accessIcon = accessIcons[data.access] || accessIcons.private; 
  const typeIcon = icons[data.type] || null; 

  return (
    <div className="resource-node">
       {typeIcon && <img src={typeIcon} alt={data.type} />}
      <div>{data.name}</div>
      <img src={accessIcon} alt={data.access} />
      <Handle type="target" position="left" />
    </div>
  );
};

export default ResourceNode;