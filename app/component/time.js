/**
 * Created by 核武器 on 2017/5/3.
 */
import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import "../../css/hh.less"
const TimePickerExampleSimple = () => (
    <div>
        <TimePicker
            hintText="12hr Format"
            className="hh"
        />
        <TimePicker
            hintText="12hr Format with auto ok"
            autoOk={true}
        />
        <TimePicker
            format="24hr"
            hintText="24hr Format"
        />
        <TimePicker
            disabled={true}
            format="24hr"
            hintText="Disabled TimePicker"
        />
    </div>
);



export default TimePickerExampleSimple;