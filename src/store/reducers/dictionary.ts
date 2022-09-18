import { SECURITY_LEVEL } from "../types/dictionary";

const init_state = {
  levelType: [], //安全级别
  metaType: [], //元数据类型
  dataType: [], //来源类型-类型
  valueType: [], //取值范围类型
};

export default function dictionary(state = init_state, action: any) {
  const { type, data } = action;
  switch (type) {
    case SECURITY_LEVEL:
      return Object.assign({}, state, { levelType: data });
    default:
      return state;
  }
}
