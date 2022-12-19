import React, { useState, ChangeEvent } from 'react';
import './HorizontalV2.css';

const HorizontalCheckV2 = () => {
    const generic11 = 1;
    const generic21 = 1;
    const generic31 = 1;
    const generic41 = 0;
    const generic51 = 0;
    const generic61 = 0;

    const generic12 = 1;
    const generic22 = 0;
    const generic32 = 0;
    const generic42 = 1;
    const generic52 = 1;
    const generic62 = 0;

    const generic13 = 0;
    const generic23 = 1;
    const generic33 = 0;
    const generic43 = 1;
    const generic53 = 0;
    const generic63 = 1;

    const generic14 = 0;
    const generic24 = 0;
    const generic34 = 1;
    const generic44 = 0;
    const generic54 = 1;
    const generic64 = 1;

    const columnGeneric1 = [generic11, generic21, generic31, generic41, generic51, generic61];
    const columnGeneric2 = [generic12, generic22, generic32, generic42, generic52, generic62];
    const columnGeneric3 = [generic13, generic23, generic33, generic43, generic53, generic63];
    const columnGeneric4 = [generic14, generic24, generic34, generic44, generic54, generic64];

    const genericColumnsArr = [columnGeneric1, columnGeneric2, columnGeneric3, columnGeneric4];

    // ******* GENERIC *******

    // column 1 states
    // const [generic11, setGeneric11] = useState<number | null>();
    // const [generic21, setGeneric21] = useState<number | null>();
    // const [generic31, setGeneric31] = useState<number | null>();
    // const [generic41, setGeneric41] = useState<number | null>();
    // const [generic51, setGeneric51] = useState<number | null>();
    // const [generic61, setGeneric61] = useState<number | null>();
    // const [generic71, setGeneric71] = useState<number | null>();
    // const [generic81, setGeneric81] = useState<number | null>();
    // const [generic91, setGeneric91] = useState<number | null>();
    // const [generic101, setGeneric101] = useState<number | null>();
    // const [generic111, setGeneric111] = useState<number | null>();
    // const [generic121, setGeneric121] = useState<number | null>();
    // const [generic131, setGeneric131] = useState<number | null>();
    // const [generic141, setGeneric141] = useState<number | null>();
    // const [generic151, setGeneric151] = useState<number | null>();

    // // column 2 states
    // const [generic12, setGeneric12] = useState<number | null>();
    // const [generic22, setGeneric22] = useState<number | null>();
    // const [generic32, setGeneric32] = useState<number | null>();
    // const [generic42, setGeneric42] = useState<number | null>();
    // const [generic52, setGeneric52] = useState<number | null>();
    // const [generic62, setGeneric62] = useState<number | null>();
    // const [generic72, setGeneric72] = useState<number | null>();
    // const [generic82, setGeneric82] = useState<number | null>();
    // const [generic92, setGeneric92] = useState<number | null>();
    // const [generic102, setGeneric102] = useState<number | null>();
    // const [generic112, setGeneric112] = useState<number | null>();
    // const [generic122, setGeneric122] = useState<number | null>();
    // const [generic132, setGeneric132] = useState<number | null>();
    // const [generic142, setGeneric142] = useState<number | null>();
    // const [generic152, setGeneric152] = useState<number | null>();

    // column 3 states
    // const [generic13, setGeneric13] = useState<number | null>();
    // const [generic23, setGeneric23] = useState<number | null>();
    // const [generic33, setGeneric33] = useState<number | null>();
    // const [generic43, setGeneric43] = useState<number | null>();
    // const [generic53, setGeneric53] = useState<number | null>();
    // const [generic63, setGeneric63] = useState<number | null>();
    // const [generic73, setGeneric73] = useState<number | null>();
    // const [generic83, setGeneric83] = useState<number | null>();
    // const [generic93, setGeneric93] = useState<number | null>();
    // const [generic103, setGeneric103] = useState<number | null>();
    // const [generic113, setGeneric113] = useState<number | null>();
    // const [generic123, setGeneric123] = useState<number | null>();
    // const [generic133, setGeneric133] = useState<number | null>();
    // const [generic143, setGeneric143] = useState<number | null>();
    // const [generic153, setGeneric153] = useState<number | null>();

    // column 4 states
    // const [generic14, setGeneric14] = useState<number | null>();
    // const [generic24, setGeneric24] = useState<number | null>();
    // const [generic34, setGeneric34] = useState<number | null>();
    // const [generic44, setGeneric44] = useState<number | null>();
    // const [generic54, setGeneric54] = useState<number | null>();
    // const [generic64, setGeneric64] = useState<number | null>();
    // const [generic74, setGeneric74] = useState<number | null>();
    // const [generic84, setGeneric84] = useState<number | null>();
    // const [generic94, setGeneric94] = useState<number | null>();
    // const [generic104, setGeneric104] = useState<number | null>();
    // const [generic114, setGeneric114] = useState<number | null>();
    // const [generic124, setGeneric124] = useState<number | null>();
    // const [generic134, setGeneric134] = useState<number | null>();
    // const [generic144, setGeneric144] = useState<number | null>();
    // const [generic154, setGeneric154] = useState<number | null>();

    // column 5 states
    // const [generic15, setGeneric15] = useState<number | null>();
    // const [generic25, setGeneric25] = useState<number | null>();
    // const [generic35, setGeneric35] = useState<number | null>();
    // const [generic45, setGeneric45] = useState<number | null>();
    // const [generic55, setGeneric55] = useState<number | null>();
    // const [generic65, setGeneric65] = useState<number | null>();
    // const [generic75, setGeneric75] = useState<number | null>();
    // const [generic85, setGeneric85] = useState<number | null>();
    // const [generic95, setGeneric95] = useState<number | null>();
    // const [generic105, setGeneric105] = useState<number | null>();
    // const [generic115, setGeneric115] = useState<number | null>();
    // const [generic125, setGeneric125] = useState<number | null>();
    // const [generic135, setGeneric135] = useState<number | null>();
    // const [generic145, setGeneric145] = useState<number | null>();
    // const [generic155, setGeneric155] = useState<number | null>();

    // //column 1 change handlers
    // const changeGeneric11 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric11 = parseInt(event.target.value);
    //     setGeneric11(numGeneric11);
    // };

    // const changeGeneric21 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric21 = parseInt(event.target.value);
    //     setGeneric21(numGeneric21);
    // };

    // const changeGeneric31 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric31 = parseInt(event.target.value);
    //     setGeneric31(numGeneric31);
    // };

    // const changeGeneric41 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric41 = parseInt(event.target.value);
    //     setGeneric41(numGeneric41);
    // };

    // const changeGeneric51 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric51 = parseInt(event.target.value);
    //     setGeneric51(numGeneric51);
    // };

    // const changeGeneric61 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric61 = parseInt(event.target.value);
    //     setGeneric61(numGeneric61);
    // };

    // const changeGeneric71 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric71 = parseInt(event.target.value);
    //     setGeneric71(numGeneric71);
    // };

    // const changeGeneric81 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric81 = parseInt(event.target.value);
    //     setGeneric81(numGeneric81);
    // };

    // const changeGeneric91 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric91 = parseInt(event.target.value);
    //     setGeneric91(numGeneric91);
    // };

    // const changeGeneric101 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric101 = parseInt(event.target.value);
    //     setGeneric101(numGeneric101);
    // };

    // const changeGeneric111 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric111 = parseInt(event.target.value);
    //     setGeneric111(numGeneric111);
    // };

    // const changeGeneric121 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric121 = parseInt(event.target.value);
    //     setGeneric121(numGeneric121);
    // };

    // const changeGeneric131 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric131 = parseInt(event.target.value);
    //     setGeneric131(numGeneric131);
    // };

    // const changeGeneric141 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric141 = parseInt(event.target.value);
    //     setGeneric141(numGeneric141);
    // };

    // const changeGeneric151 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric151 = parseInt(event.target.value);
    //     setGeneric151(numGeneric151);
    // };

    // //column 2 change handlers
    // const changeGeneric12 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric12 = parseInt(event.target.value);
    //     setGeneric12(numGeneric12);
    // };

    // const changeGeneric22 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric22 = parseInt(event.target.value);
    //     setGeneric22(numGeneric22);
    // };

    // const changeGeneric32 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric32 = parseInt(event.target.value);
    //     setGeneric32(numGeneric32);
    // };

    // const changeGeneric42 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric42 = parseInt(event.target.value);
    //     setGeneric42(numGeneric42);
    // };

    // const changeGeneric52 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric52 = parseInt(event.target.value);
    //     setGeneric52(numGeneric52);
    // };

    // const changeGeneric62 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric62 = parseInt(event.target.value);
    //     setGeneric62(numGeneric62);
    // };

    // const changeGeneric72 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric72 = parseInt(event.target.value);
    //     setGeneric72(numGeneric72);
    // };

    // const changeGeneric82 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric82 = parseInt(event.target.value);
    //     setGeneric82(numGeneric82);
    // };

    // const changeGeneric92 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric92 = parseInt(event.target.value);
    //     setGeneric92(numGeneric92);
    // };

    // const changeGeneric102 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric102 = parseInt(event.target.value);
    //     setGeneric102(numGeneric102);
    // };

    // const changeGeneric112 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric112 = parseInt(event.target.value);
    //     setGeneric112(numGeneric112);
    // };

    // const changeGeneric122 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric122 = parseInt(event.target.value);
    //     setGeneric122(numGeneric122);
    // };

    // const changeGeneric132 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric132 = parseInt(event.target.value);
    //     setGeneric132(numGeneric132);
    // };

    // const changeGeneric142 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric142 = parseInt(event.target.value);
    //     setGeneric142(numGeneric142);
    // };

    // const changeGeneric152 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric152 = parseInt(event.target.value);
    //     setGeneric152(numGeneric152);
    // };

    // //column 3 change handlers
    // const changeGeneric13 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric13 = parseInt(event.target.value);
    //     setGeneric13(numGeneric13);
    // };

    // const changeGeneric23 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric23 = parseInt(event.target.value);
    //     setGeneric23(numGeneric23);
    // };

    // const changeGeneric33 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric33 = parseInt(event.target.value);
    //     setGeneric33(numGeneric33);
    // };

    // const changeGeneric43 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric43 = parseInt(event.target.value);
    //     setGeneric43(numGeneric43);
    // };

    // const changeGeneric53 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric53 = parseInt(event.target.value);
    //     setGeneric53(numGeneric53);
    // };

    // const changeGeneric63 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric63 = parseInt(event.target.value);
    //     setGeneric63(numGeneric63);
    // };

    // const changeGeneric73 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric73 = parseInt(event.target.value);
    //     setGeneric73(numGeneric73);
    // };

    // const changeGeneric83 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric83 = parseInt(event.target.value);
    //     setGeneric83(numGeneric83);
    // };

    // const changeGeneric93 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric93 = parseInt(event.target.value);
    //     setGeneric93(numGeneric93);
    // };

    // const changeGeneric103 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric103 = parseInt(event.target.value);
    //     setGeneric103(numGeneric103);
    // };

    // const changeGeneric113 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric113 = parseInt(event.target.value);
    //     setGeneric113(numGeneric113);
    // };

    // const changeGeneric123 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric123 = parseInt(event.target.value);
    //     setGeneric123(numGeneric123);
    // };

    // const changeGeneric133 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric133 = parseInt(event.target.value);
    //     setGeneric133(numGeneric133);
    // };

    // const changeGeneric143 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric143 = parseInt(event.target.value);
    //     setGeneric143(numGeneric143);
    // };

    // const changeGeneric153 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric153 = parseInt(event.target.value);
    //     setGeneric153(numGeneric153);
    // };

    // //column 4 change handlers
    // const changeGeneric14 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric14 = parseInt(event.target.value);
    //     setGeneric14(numGeneric14);
    // };

    // const changeGeneric24 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric24 = parseInt(event.target.value);
    //     setGeneric24(numGeneric24);
    // };

    // const changeGeneric34 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric34 = parseInt(event.target.value);
    //     setGeneric34(numGeneric34);
    // };

    // const changeGeneric44 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric44 = parseInt(event.target.value);
    //     setGeneric44(numGeneric44);
    // };

    // const changeGeneric54 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric54 = parseInt(event.target.value);
    //     setGeneric54(numGeneric54);
    // };

    // const changeGeneric64 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric64 = parseInt(event.target.value);
    //     setGeneric64(numGeneric64);
    // };

    // const changeGeneric74 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric74 = parseInt(event.target.value);
    //     setGeneric74(numGeneric74);
    // };

    // const changeGeneric84 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric84 = parseInt(event.target.value);
    //     setGeneric84(numGeneric84);
    // };

    // const changeGeneric94 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric94 = parseInt(event.target.value);
    //     setGeneric94(numGeneric94);
    // };

    // const changeGeneric104 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric104 = parseInt(event.target.value);
    //     setGeneric104(numGeneric104);
    // };

    // const changeGeneric114 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric114 = parseInt(event.target.value);
    //     setGeneric114(numGeneric114);
    // };

    // const changeGeneric124 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric124 = parseInt(event.target.value);
    //     setGeneric124(numGeneric124);
    // };

    // const changeGeneric134 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric134 = parseInt(event.target.value);
    //     setGeneric134(numGeneric134);
    // };

    // const changeGeneric144 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric144 = parseInt(event.target.value);
    //     setGeneric144(numGeneric144);
    // };

    // const changeGeneric154 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric154 = parseInt(event.target.value);
    //     setGeneric154(numGeneric154);
    // };

    // //column 5 change handlers
    // const changeGeneric15 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric15 = parseInt(event.target.value);
    //     setGeneric15(numGeneric15);
    // };

    // const changeGeneric25 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric25 = parseInt(event.target.value);
    //     setGeneric25(numGeneric25);
    // };

    // const changeGeneric35 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric35 = parseInt(event.target.value);
    //     setGeneric35(numGeneric35);
    // };

    // const changeGeneric45 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric45 = parseInt(event.target.value);
    //     setGeneric45(numGeneric45);
    // };

    // const changeGeneric55 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric55 = parseInt(event.target.value);
    //     setGeneric55(numGeneric55);
    // };

    // const changeGeneric65 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric65 = parseInt(event.target.value);
    //     setGeneric65(numGeneric65);
    // };

    // const changeGeneric75 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric75 = parseInt(event.target.value);
    //     setGeneric75(numGeneric75);
    // };

    // const changeGeneric85 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric85 = parseInt(event.target.value);
    //     setGeneric85(numGeneric85);
    // };

    // const changeGeneric95 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric95 = parseInt(event.target.value);
    //     setGeneric95(numGeneric95);
    // };

    // const changeGeneric105 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric105 = parseInt(event.target.value);
    //     setGeneric105(numGeneric105);
    // };

    // const changeGeneric115 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric115 = parseInt(event.target.value);
    //     setGeneric115(numGeneric115);
    // };

    // const changeGeneric125 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric125 = parseInt(event.target.value);
    //     setGeneric125(numGeneric125);
    // };

    // const changeGeneric135 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric135 = parseInt(event.target.value);
    //     setGeneric135(numGeneric135);
    // };

    // const changeGeneric145 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric145 = parseInt(event.target.value);
    //     setGeneric145(numGeneric145);
    // };

    // const changeGeneric155 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric155 = parseInt(event.target.value);
    //     setGeneric155(numGeneric155);
    // };

    // const readGeneric = () => {
    //     const columnGeneric1 = [
    //         generic11,
    //         generic21,
    //         generic31,
    //         generic41,
    //         generic51,
    //         generic61,
    //         generic71,
    //         generic81,
    //         generic91,
    //         generic101,
    //         generic111,
    //         generic121,
    //         generic131,
    //         generic141,
    //         generic151
    //     ];
    //     const columnGeneric2 = [
    //         generic12,
    //         generic22,
    //         generic32,
    //         generic42,
    //         generic52,
    //         generic62,
    //         generic72,
    //         generic82,
    //         generic92,
    //         generic102,
    //         generic112,
    //         generic122,
    //         generic132,
    //         generic142,
    //         generic152
    //     ];
    //     const columnGeneric3 = [
    //         generic13,
    //         generic23,
    //         generic33,
    //         generic43,
    //         generic53,
    //         generic63,
    //         generic73,
    //         generic83,
    //         generic93,
    //         generic103,
    //         generic113,
    //         generic123,
    //         generic133,
    //         generic143,
    //         generic153
    //     ];
    //     const columnGeneric4 = [
    //         generic14,
    //         generic24,
    //         generic34,
    //         generic44,
    //         generic54,
    //         generic64,
    //         generic74,
    //         generic84,
    //         generic94,
    //         generic104,
    //         generic114,
    //         generic124,
    //         generic134,
    //         generic144,
    //         generic154
    //     ];
    //     const columnGeneric5 = [
    //         generic15,
    //         generic25,
    //         generic35,
    //         generic45,
    //         generic55,
    //         generic65,
    //         generic75,
    //         generic85,
    //         generic95,
    //         generic105,
    //         generic115,
    //         generic125,
    //         generic135,
    //         generic145,
    //         generic155
    //     ];

    //     return [columnGeneric1, columnGeneric2, columnGeneric3, columnGeneric4, columnGeneric5];
    // };

    // ********* MATRIX **********

    // row 1 states
    const [value11, setValue11] = useState<number | null>();
    const [value12, setValue12] = useState<number | null>();
    const [value13, setValue13] = useState<number | null>();
    const [value14, setValue14] = useState<number | null>();
    const [value15, setValue15] = useState<number | null>();
    const [value16, setValue16] = useState<number | null>();

    // row 2 states
    const [value21, setValue21] = useState<number | null>();
    const [value22, setValue22] = useState<number | null>();
    const [value23, setValue23] = useState<number | null>();
    const [value24, setValue24] = useState<number | null>();
    const [value25, setValue25] = useState<number | null>();
    const [value26, setValue26] = useState<number | null>();

    // row 3 states
    const [value31, setValue31] = useState<number | null>();
    const [value32, setValue32] = useState<number | null>();
    const [value33, setValue33] = useState<number | null>();
    const [value34, setValue34] = useState<number | null>();
    const [value35, setValue35] = useState<number | null>();
    const [value36, setValue36] = useState<number | null>();

    // row 4 states
    const [value41, setValue41] = useState<number | null>();
    const [value42, setValue42] = useState<number | null>();
    const [value43, setValue43] = useState<number | null>();
    const [value44, setValue44] = useState<number | null>();
    const [value45, setValue45] = useState<number | null>();
    const [value46, setValue46] = useState<number | null>();

    // row 5 states
    const [value51, setValue51] = useState<number | null>();
    const [value52, setValue52] = useState<number | null>();
    const [value53, setValue53] = useState<number | null>();
    const [value54, setValue54] = useState<number | null>();
    const [value55, setValue55] = useState<number | null>();
    const [value56, setValue56] = useState<number | null>();

    // row 6 states
    const [value61, setValue61] = useState<number | null>();
    const [value62, setValue62] = useState<number | null>();
    const [value63, setValue63] = useState<number | null>();
    const [value64, setValue64] = useState<number | null>();
    const [value65, setValue65] = useState<number | null>();
    const [value66, setValue66] = useState<number | null>();

    // row 7 states
    const [value71, setValue71] = useState<number | null>();
    const [value72, setValue72] = useState<number | null>();
    const [value73, setValue73] = useState<number | null>();
    const [value74, setValue74] = useState<number | null>();
    const [value75, setValue75] = useState<number | null>();
    const [value76, setValue76] = useState<number | null>();

    // row 8 states
    const [value81, setValue81] = useState<number | null>();
    const [value82, setValue82] = useState<number | null>();
    const [value83, setValue83] = useState<number | null>();
    const [value84, setValue84] = useState<number | null>();
    const [value85, setValue85] = useState<number | null>();
    const [value86, setValue86] = useState<number | null>();

    // row 9 states
    const [value91, setValue91] = useState<number | null>();
    const [value92, setValue92] = useState<number | null>();
    const [value93, setValue93] = useState<number | null>();
    const [value94, setValue94] = useState<number | null>();
    const [value95, setValue95] = useState<number | null>();
    const [value96, setValue96] = useState<number | null>();

    // continue here

    //row 1 change handlers
    const change11 = (event: ChangeEvent<HTMLInputElement>) => {
        const num11 = parseInt(event.target.value);
        setValue11(num11);
    };

    const change12 = (event: ChangeEvent<HTMLInputElement>) => {
        const num12 = parseInt(event.target.value);
        setValue12(num12);
    };

    const change13 = (event: ChangeEvent<HTMLInputElement>) => {
        const num13 = parseInt(event.target.value);
        setValue13(num13);
    };

    const change14 = (event: ChangeEvent<HTMLInputElement>) => {
        const num14 = parseInt(event.target.value);
        setValue14(num14);
    };

    const change15 = (event: ChangeEvent<HTMLInputElement>) => {
        const num15 = parseInt(event.target.value);
        setValue15(num15);
    };

    const change16 = (event: ChangeEvent<HTMLInputElement>) => {
        const num16 = parseInt(event.target.value);
        setValue16(num16);
    };

    //row 2 change handlers
    const change21 = (event: ChangeEvent<HTMLInputElement>) => {
        const num21 = parseInt(event.target.value);
        setValue21(num21);
    };

    const change22 = (event: ChangeEvent<HTMLInputElement>) => {
        const num22 = parseInt(event.target.value);
        setValue22(num22);
    };

    const change23 = (event: ChangeEvent<HTMLInputElement>) => {
        const num23 = parseInt(event.target.value);
        setValue23(num23);
    };

    const change24 = (event: ChangeEvent<HTMLInputElement>) => {
        const num24 = parseInt(event.target.value);
        setValue24(num24);
    };

    const change25 = (event: ChangeEvent<HTMLInputElement>) => {
        const num25 = parseInt(event.target.value);
        setValue25(num25);
    };

    const change26 = (event: ChangeEvent<HTMLInputElement>) => {
        const num26 = parseInt(event.target.value);
        setValue26(num26);
    };

    //row 3 change handlers
    const change31 = (event: ChangeEvent<HTMLInputElement>) => {
        const num31 = parseInt(event.target.value);
        setValue31(num31);
    };

    const change32 = (event: ChangeEvent<HTMLInputElement>) => {
        const num32 = parseInt(event.target.value);
        setValue32(num32);
    };

    const change33 = (event: ChangeEvent<HTMLInputElement>) => {
        const num33 = parseInt(event.target.value);
        setValue33(num33);
    };

    const change34 = (event: ChangeEvent<HTMLInputElement>) => {
        const num34 = parseInt(event.target.value);
        setValue34(num34);
    };

    const change35 = (event: ChangeEvent<HTMLInputElement>) => {
        const num35 = parseInt(event.target.value);
        setValue35(num35);
    };

    const change36 = (event: ChangeEvent<HTMLInputElement>) => {
        const num36 = parseInt(event.target.value);
        setValue36(num36);
    };

    //row 4 change handlers
    const change41 = (event: ChangeEvent<HTMLInputElement>) => {
        const num41 = parseInt(event.target.value);
        setValue41(num41);
    };

    const change42 = (event: ChangeEvent<HTMLInputElement>) => {
        const num42 = parseInt(event.target.value);
        setValue42(num42);
    };

    const change43 = (event: ChangeEvent<HTMLInputElement>) => {
        const num43 = parseInt(event.target.value);
        setValue43(num43);
    };

    const change44 = (event: ChangeEvent<HTMLInputElement>) => {
        const num44 = parseInt(event.target.value);
        setValue44(num44);
    };

    const change45 = (event: ChangeEvent<HTMLInputElement>) => {
        const num45 = parseInt(event.target.value);
        setValue45(num45);
    };

    const change46 = (event: ChangeEvent<HTMLInputElement>) => {
        const num46 = parseInt(event.target.value);
        setValue46(num46);
    };

    //row 5 change handlers
    const change51 = (event: ChangeEvent<HTMLInputElement>) => {
        const num51 = parseInt(event.target.value);
        setValue51(num51);
    };

    const change52 = (event: ChangeEvent<HTMLInputElement>) => {
        const num52 = parseInt(event.target.value);
        setValue52(num52);
    };

    const change53 = (event: ChangeEvent<HTMLInputElement>) => {
        const num53 = parseInt(event.target.value);
        setValue53(num53);
    };

    const change54 = (event: ChangeEvent<HTMLInputElement>) => {
        const num54 = parseInt(event.target.value);
        setValue54(num54);
    };

    const change55 = (event: ChangeEvent<HTMLInputElement>) => {
        const num55 = parseInt(event.target.value);
        setValue55(num55);
    };

    const change56 = (event: ChangeEvent<HTMLInputElement>) => {
        const num56 = parseInt(event.target.value);
        setValue56(num56);
    };

    //row 6 change handlers
    const change61 = (event: ChangeEvent<HTMLInputElement>) => {
        const num61 = parseInt(event.target.value);
        setValue61(num61);
    };

    const change62 = (event: ChangeEvent<HTMLInputElement>) => {
        const num62 = parseInt(event.target.value);
        setValue62(num62);
    };

    const change63 = (event: ChangeEvent<HTMLInputElement>) => {
        const num63 = parseInt(event.target.value);
        setValue63(num63);
    };

    const change64 = (event: ChangeEvent<HTMLInputElement>) => {
        const num64 = parseInt(event.target.value);
        setValue64(num64);
    };

    const change65 = (event: ChangeEvent<HTMLInputElement>) => {
        const num65 = parseInt(event.target.value);
        setValue65(num65);
    };

    const change66 = (event: ChangeEvent<HTMLInputElement>) => {
        const num66 = parseInt(event.target.value);
        setValue66(num66);
    };

    //row 7 change handlers
    const change71 = (event: ChangeEvent<HTMLInputElement>) => {
        const num71 = parseInt(event.target.value);
        setValue71(num71);
    };

    const change72 = (event: ChangeEvent<HTMLInputElement>) => {
        const num72 = parseInt(event.target.value);
        setValue72(num72);
    };

    const change73 = (event: ChangeEvent<HTMLInputElement>) => {
        const num73 = parseInt(event.target.value);
        setValue73(num73);
    };

    const change74 = (event: ChangeEvent<HTMLInputElement>) => {
        const num74 = parseInt(event.target.value);
        setValue74(num74);
    };

    const change75 = (event: ChangeEvent<HTMLInputElement>) => {
        const num75 = parseInt(event.target.value);
        setValue75(num75);
    };

    const change76 = (event: ChangeEvent<HTMLInputElement>) => {
        const num76 = parseInt(event.target.value);
        setValue76(num76);
    };

    //row 8 change handlers
    const change81 = (event: ChangeEvent<HTMLInputElement>) => {
        const num81 = parseInt(event.target.value);
        setValue81(num81);
    };

    const change82 = (event: ChangeEvent<HTMLInputElement>) => {
        const num82 = parseInt(event.target.value);
        setValue82(num82);
    };

    const change83 = (event: ChangeEvent<HTMLInputElement>) => {
        const num83 = parseInt(event.target.value);
        setValue83(num83);
    };

    const change84 = (event: ChangeEvent<HTMLInputElement>) => {
        const num84 = parseInt(event.target.value);
        setValue84(num84);
    };

    const change85 = (event: ChangeEvent<HTMLInputElement>) => {
        const num85 = parseInt(event.target.value);
        setValue85(num85);
    };

    const change86 = (event: ChangeEvent<HTMLInputElement>) => {
        const num86 = parseInt(event.target.value);
        setValue86(num86);
    };

    //row 9 change handlers
    const change91 = (event: ChangeEvent<HTMLInputElement>) => {
        const num91 = parseInt(event.target.value);
        setValue91(num91);
    };

    const change92 = (event: ChangeEvent<HTMLInputElement>) => {
        const num92 = parseInt(event.target.value);
        setValue92(num92);
    };

    const change93 = (event: ChangeEvent<HTMLInputElement>) => {
        const num93 = parseInt(event.target.value);
        setValue93(num93);
    };

    const change94 = (event: ChangeEvent<HTMLInputElement>) => {
        const num94 = parseInt(event.target.value);
        setValue94(num94);
    };

    const change95 = (event: ChangeEvent<HTMLInputElement>) => {
        const num95 = parseInt(event.target.value);
        setValue95(num95);
    };

    const change96 = (event: ChangeEvent<HTMLInputElement>) => {
        const num96 = parseInt(event.target.value);
        setValue96(num96);
    };

    const readMatrix = () => {
        const row1 = [value11, value12, value13, value14, value15, value16];
        const row2 = [value21, value22, value23, value24, value25, value26];
        const row3 = [value31, value32, value33, value34, value35, value36];
        const row4 = [value41, value42, value43, value44, value45, value46];
        const row5 = [value51, value52, value53, value54, value55, value56];
        const row6 = [value61, value62, value63, value64, value65, value66];
        const row7 = [value71, value72, value73, value74, value75, value76];
        const row8 = [value81, value82, value83, value84, value85, value86];
        const row9 = [value91, value92, value93, value94, value95, value96];

        return [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    };

    // number of coincides of matrix row 1 x generic columns
    const [numberOfCoincidences1x1, setNumberOfCoincidences1x1] = useState(0);
    const [numberOfCoincidences1x2, setNumberOfCoincidences1x2] = useState(0);
    const [numberOfCoincidences1x3, setNumberOfCoincidences1x3] = useState(0);
    const [numberOfCoincidences1x4, setNumberOfCoincidences1x4] = useState(0);

    // number of coincides of matrix row 2 x generic columns
    const [numberOfCoincidences2x1, setNumberOfCoincidences2x1] = useState(0);
    const [numberOfCoincidences2x2, setNumberOfCoincidences2x2] = useState(0);
    const [numberOfCoincidences2x3, setNumberOfCoincidences2x3] = useState(0);
    const [numberOfCoincidences2x4, setNumberOfCoincidences2x4] = useState(0);

    // number of coincides of matrix row 3 x generic columns
    const [numberOfCoincidences3x1, setNumberOfCoincidences3x1] = useState(0);
    const [numberOfCoincidences3x2, setNumberOfCoincidences3x2] = useState(0);
    const [numberOfCoincidences3x3, setNumberOfCoincidences3x3] = useState(0);
    const [numberOfCoincidences3x4, setNumberOfCoincidences3x4] = useState(0);

    // number of coincides of matrix row 4 x generic columns
    const [numberOfCoincidences4x1, setNumberOfCoincidences4x1] = useState(0);
    const [numberOfCoincidences4x2, setNumberOfCoincidences4x2] = useState(0);
    const [numberOfCoincidences4x3, setNumberOfCoincidences4x3] = useState(0);
    const [numberOfCoincidences4x4, setNumberOfCoincidences4x4] = useState(0);

    // number of coincides of matrix row 5 x generic columns
    const [numberOfCoincidences5x1, setNumberOfCoincidences5x1] = useState(0);
    const [numberOfCoincidences5x2, setNumberOfCoincidences5x2] = useState(0);
    const [numberOfCoincidences5x3, setNumberOfCoincidences5x3] = useState(0);
    const [numberOfCoincidences5x4, setNumberOfCoincidences5x4] = useState(0);

    // number of coincides of matrix row 6 x generic columns
    const [numberOfCoincidences6x1, setNumberOfCoincidences6x1] = useState(0);
    const [numberOfCoincidences6x2, setNumberOfCoincidences6x2] = useState(0);
    const [numberOfCoincidences6x3, setNumberOfCoincidences6x3] = useState(0);
    const [numberOfCoincidences6x4, setNumberOfCoincidences6x4] = useState(0);

    // number of coincides of matrix row 7 x generic columns
    const [numberOfCoincidences7x1, setNumberOfCoincidences7x1] = useState(0);
    const [numberOfCoincidences7x2, setNumberOfCoincidences7x2] = useState(0);
    const [numberOfCoincidences7x3, setNumberOfCoincidences7x3] = useState(0);
    const [numberOfCoincidences7x4, setNumberOfCoincidences7x4] = useState(0);

    // number of coincides of matrix row 8 x generic columns
    const [numberOfCoincidences8x1, setNumberOfCoincidences8x1] = useState(0);
    const [numberOfCoincidences8x2, setNumberOfCoincidences8x2] = useState(0);
    const [numberOfCoincidences8x3, setNumberOfCoincidences8x3] = useState(0);
    const [numberOfCoincidences8x4, setNumberOfCoincidences8x4] = useState(0);

    // number of coincides of matrix row 9 x generic columns
    const [numberOfCoincidences9x1, setNumberOfCoincidences9x1] = useState(0);
    const [numberOfCoincidences9x2, setNumberOfCoincidences9x2] = useState(0);
    const [numberOfCoincidences9x3, setNumberOfCoincidences9x3] = useState(0);
    const [numberOfCoincidences9x4, setNumberOfCoincidences9x4] = useState(0);

    // *********** HORIZONTAL CHECK ***********

    const setCoincidencesToZero = () => {
        setNumberOfCoincidences1x1(0);
        setNumberOfCoincidences1x2(0);
        setNumberOfCoincidences1x3(0);
        setNumberOfCoincidences1x4(0);

        setNumberOfCoincidences2x1(0);
        setNumberOfCoincidences2x2(0);
        setNumberOfCoincidences2x3(0);
        setNumberOfCoincidences2x4(0);

        setNumberOfCoincidences3x1(0);
        setNumberOfCoincidences3x2(0);
        setNumberOfCoincidences3x3(0);
        setNumberOfCoincidences3x4(0);

        setNumberOfCoincidences4x1(0);
        setNumberOfCoincidences4x2(0);
        setNumberOfCoincidences4x3(0);
        setNumberOfCoincidences4x4(0);

        setNumberOfCoincidences5x1(0);
        setNumberOfCoincidences5x2(0);
        setNumberOfCoincidences5x3(0);
        setNumberOfCoincidences5x4(0);

        setNumberOfCoincidences6x1(0);
        setNumberOfCoincidences6x2(0);
        setNumberOfCoincidences6x3(0);
        setNumberOfCoincidences6x4(0);

        setNumberOfCoincidences7x1(0);
        setNumberOfCoincidences7x2(0);
        setNumberOfCoincidences7x3(0);
        setNumberOfCoincidences7x4(0);

        setNumberOfCoincidences8x1(0);
        setNumberOfCoincidences8x2(0);
        setNumberOfCoincidences8x3(0);
        setNumberOfCoincidences8x4(0);

        setNumberOfCoincidences9x1(0);
        setNumberOfCoincidences9x2(0);
        setNumberOfCoincidences9x3(0);
        setNumberOfCoincidences9x4(0);
    };

    const row1Function = (
        matrix1Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 1 x 1 (1st matrix row x 1st generic column)
        if (matrix1Arr[0] === generic1Arr[0] && matrix1Arr[0] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[1] === generic1Arr[1] && matrix1Arr[1] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[2] === generic1Arr[2] && matrix1Arr[2] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[3] === generic1Arr[3] && matrix1Arr[3] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[4] === generic1Arr[4] && matrix1Arr[4] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[5] === generic1Arr[5] && matrix1Arr[5] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }

        // 1 x 2 (1st matrix row x 2nd generic column)
        if (matrix1Arr[0] === generic2Arr[0] && matrix1Arr[0] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[1] === generic2Arr[1] && matrix1Arr[1] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[2] === generic2Arr[2] && matrix1Arr[2] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[3] === generic2Arr[3] && matrix1Arr[3] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[4] === generic2Arr[4] && matrix1Arr[4] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[5] === generic2Arr[5] && matrix1Arr[5] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }

        // 1 x 3 (1st matrix row x 3rd generic column)
        if (matrix1Arr[0] === generic3Arr[0] && matrix1Arr[0] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[1] === generic3Arr[1] && matrix1Arr[1] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[2] === generic3Arr[2] && matrix1Arr[2] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[3] === generic3Arr[3] && matrix1Arr[3] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[4] === generic3Arr[4] && matrix1Arr[4] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[5] === generic3Arr[5] && matrix1Arr[5] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }

        // 1 x 4 (1st matrix row x 4th generic column)
        if (matrix1Arr[0] === generic4Arr[0] && matrix1Arr[0] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[1] === generic4Arr[1] && matrix1Arr[1] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[2] === generic4Arr[2] && matrix1Arr[2] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[3] === generic4Arr[3] && matrix1Arr[3] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[4] === generic4Arr[4] && matrix1Arr[4] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (matrix1Arr[5] === generic4Arr[5] && matrix1Arr[5] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
    };

    const row2Function = (
        matrix2Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 2 x 1 (2nd matrix row x 1st generic column)
        if (matrix2Arr[0] === generic1Arr[0] && matrix2Arr[0] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[1] === generic1Arr[1] && matrix2Arr[1] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[2] === generic1Arr[2] && matrix2Arr[2] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[3] === generic1Arr[3] && matrix2Arr[3] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[4] === generic1Arr[4] && matrix2Arr[4] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[5] === generic1Arr[5] && matrix2Arr[5] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }

        // 2 x 2 (2nd matrix row x 2nd generic column)
        if (matrix2Arr[0] === generic2Arr[0] && matrix2Arr[0] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[1] === generic2Arr[1] && matrix2Arr[1] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[2] === generic2Arr[2] && matrix2Arr[2] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[3] === generic2Arr[3] && matrix2Arr[3] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[4] === generic2Arr[4] && matrix2Arr[4] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[5] === generic2Arr[5] && matrix2Arr[5] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }

        // 2 x 3 (2nd matrix row x 3rd generic column)
        if (matrix2Arr[0] === generic3Arr[0] && matrix2Arr[0] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[1] === generic3Arr[1] && matrix2Arr[1] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[2] === generic3Arr[2] && matrix2Arr[2] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[3] === generic3Arr[3] && matrix2Arr[3] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[4] === generic3Arr[4] && matrix2Arr[4] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[5] === generic3Arr[5] && matrix2Arr[5] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }

        // 2 x 4 (2nd matrix row x 4th generic column)
        if (matrix2Arr[0] === generic4Arr[0] && matrix2Arr[0] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[1] === generic4Arr[1] && matrix2Arr[1] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[2] === generic4Arr[2] && matrix2Arr[2] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[3] === generic4Arr[3] && matrix2Arr[3] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[4] === generic4Arr[4] && matrix2Arr[4] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (matrix2Arr[5] === generic4Arr[5] && matrix2Arr[5] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
    };

    const row3Function = (
        matrix3Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 3 x 1 (3rd matrix row x 1st generic column)
        if (matrix3Arr[0] === generic1Arr[0] && matrix3Arr[0] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[1] === generic1Arr[1] && matrix3Arr[1] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[2] === generic1Arr[2] && matrix3Arr[2] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[3] === generic1Arr[3] && matrix3Arr[3] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[4] === generic1Arr[4] && matrix3Arr[4] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[5] === generic1Arr[5] && matrix3Arr[5] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }

        // 3 x 2 (3rd matrix row x 2nd generic column)
        if (matrix3Arr[0] === generic2Arr[0] && matrix3Arr[0] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[1] === generic2Arr[1] && matrix3Arr[1] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[2] === generic2Arr[2] && matrix3Arr[2] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[3] === generic2Arr[3] && matrix3Arr[3] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[4] === generic2Arr[4] && matrix3Arr[4] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[5] === generic2Arr[5] && matrix3Arr[5] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }

        // 3 x 3 (3rd matrix row x 3rd generic column)
        if (matrix3Arr[0] === generic3Arr[0] && matrix3Arr[0] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[1] === generic3Arr[1] && matrix3Arr[1] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[2] === generic3Arr[2] && matrix3Arr[2] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[3] === generic3Arr[3] && matrix3Arr[3] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[4] === generic3Arr[4] && matrix3Arr[4] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[5] === generic3Arr[5] && matrix3Arr[5] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }

        // 3 x 4 (3rd matrix row x 4th generic column)
        if (matrix3Arr[0] === generic4Arr[0] && matrix3Arr[0] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[1] === generic4Arr[1] && matrix3Arr[1] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[2] === generic4Arr[2] && matrix3Arr[2] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[3] === generic4Arr[3] && matrix3Arr[3] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[4] === generic4Arr[4] && matrix3Arr[4] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (matrix3Arr[5] === generic4Arr[5] && matrix3Arr[5] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
    };

    const row4Function = (
        matrix4Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 4 x 1 (4th matrix row x 1st generic column)
        if (matrix4Arr[0] === generic1Arr[0] && matrix4Arr[0] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[1] === generic1Arr[1] && matrix4Arr[1] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[2] === generic1Arr[2] && matrix4Arr[2] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[3] === generic1Arr[3] && matrix4Arr[3] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[4] === generic1Arr[4] && matrix4Arr[4] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[5] === generic1Arr[5] && matrix4Arr[5] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }

        // 4 x 2 (4th matrix row x 2nd generic column)
        if (matrix4Arr[0] === generic2Arr[0] && matrix4Arr[0] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[1] === generic2Arr[1] && matrix4Arr[1] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[2] === generic2Arr[2] && matrix4Arr[2] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[3] === generic2Arr[3] && matrix4Arr[3] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[4] === generic2Arr[4] && matrix4Arr[4] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[5] === generic2Arr[5] && matrix4Arr[5] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }

        // 4 x 3 (4th matrix row x 3rd generic column)
        if (matrix4Arr[0] === generic3Arr[0] && matrix4Arr[0] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[1] === generic3Arr[1] && matrix4Arr[1] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[2] === generic3Arr[2] && matrix4Arr[2] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[3] === generic3Arr[3] && matrix4Arr[3] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[4] === generic3Arr[4] && matrix4Arr[4] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[5] === generic3Arr[5] && matrix4Arr[5] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }

        // 4 x 4 (4th matrix row x 4th generic column)
        if (matrix4Arr[0] === generic4Arr[0] && matrix4Arr[0] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[1] === generic4Arr[1] && matrix4Arr[1] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[2] === generic4Arr[2] && matrix4Arr[2] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[3] === generic4Arr[3] && matrix4Arr[3] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[4] === generic4Arr[4] && matrix4Arr[4] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (matrix4Arr[5] === generic4Arr[5] && matrix4Arr[5] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
    };

    const doHorisontalCheck = () => {
        setCoincidencesToZero();

        // let genericColumnsArr = readGeneric();
        const generic1Arr = genericColumnsArr[0];
        const generic2Arr = genericColumnsArr[1];
        const generic3Arr = genericColumnsArr[2];
        const generic4Arr = genericColumnsArr[3];

        let matrixRowsArr = readMatrix();
        const matrix1Arr = matrixRowsArr[0];
        const matrix2Arr = matrixRowsArr[1];
        const matrix3Arr = matrixRowsArr[2];
        const matrix4Arr = matrixRowsArr[3];
        const matrix5Arr = matrixRowsArr[4];
        const matrix6Arr = matrixRowsArr[5];
        const matrix7Arr = matrixRowsArr[6];
        const matrix8Arr = matrixRowsArr[7];
        const matrix9Arr = matrixRowsArr[8];

        console.log('Generic columns: ', genericColumnsArr);
        console.log('Matrix rows: ', matrixRowsArr);

        //set columns and rows to localstorage
        //generic
        // localStorage.setItem('generic1Arr', generic1Arr.join());
        // localStorage.setItem('generic2Arr', generic2Arr.join());
        // localStorage.setItem('generic3Arr', generic3Arr.join());
        // localStorage.setItem('generic4Arr', generic4Arr.join());
        // localStorage.setItem('generic5Arr', generic5Arr.join());

        //matrix
        localStorage.setItem('matrix1Arr', matrix1Arr.join());
        localStorage.setItem('matrix2Arr', matrix2Arr.join());
        localStorage.setItem('matrix3Arr', matrix3Arr.join());
        localStorage.setItem('matrix4Arr', matrix4Arr.join());
        localStorage.setItem('matrix5Arr', matrix5Arr.join());
        localStorage.setItem('matrix6Arr', matrix6Arr.join());
        localStorage.setItem('matrix7Arr', matrix7Arr.join());
        localStorage.setItem('matrix8Arr', matrix8Arr.join());
        localStorage.setItem('matrix9Arr', matrix9Arr.join());

        row1Function(matrix1Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);
        row2Function(matrix2Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);
        row3Function(matrix3Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);
        row4Function(matrix4Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);

        // 5 x 1 (5th matrix row x 1st generic column)
        if (matrix5Arr[0] === generic1Arr[0] && matrix5Arr[0] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[1] === generic1Arr[1] && matrix5Arr[1] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[2] === generic1Arr[2] && matrix5Arr[2] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[3] === generic1Arr[3] && matrix5Arr[3] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[4] === generic1Arr[4] && matrix5Arr[4] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[5] === generic1Arr[5] && matrix5Arr[5] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }

        // 5 x 2 (5th matrix row x 2nd generic column)
        if (matrix5Arr[0] === generic2Arr[0] && matrix5Arr[0] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[1] === generic2Arr[1] && matrix5Arr[1] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[2] === generic2Arr[2] && matrix5Arr[2] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[3] === generic2Arr[3] && matrix5Arr[3] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[4] === generic2Arr[4] && matrix5Arr[4] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[5] === generic2Arr[5] && matrix5Arr[5] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }

        // 5 x 3 (5th matrix row x 3rd generic column)
        if (matrix5Arr[0] === generic3Arr[0] && matrix5Arr[0] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[1] === generic3Arr[1] && matrix5Arr[1] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[2] === generic3Arr[2] && matrix5Arr[2] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[3] === generic3Arr[3] && matrix5Arr[3] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[4] === generic3Arr[4] && matrix5Arr[4] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[5] === generic3Arr[5] && matrix5Arr[5] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }

        // 5 x 4 (5th matrix row x 4th generic column)
        if (matrix5Arr[0] === generic4Arr[0] && matrix5Arr[0] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[1] === generic4Arr[1] && matrix5Arr[1] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[2] === generic4Arr[2] && matrix5Arr[2] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[3] === generic4Arr[3] && matrix5Arr[3] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[4] === generic4Arr[4] && matrix5Arr[4] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (matrix5Arr[5] === generic4Arr[5] && matrix5Arr[5] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }

        // 6 x 1 (6th matrix row x 1st generic column)
        if (matrix6Arr[0] === generic1Arr[0] && matrix6Arr[0] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[1] === generic1Arr[1] && matrix6Arr[1] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[2] === generic1Arr[2] && matrix6Arr[2] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[3] === generic1Arr[3] && matrix6Arr[3] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[4] === generic1Arr[4] && matrix6Arr[4] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[5] === generic1Arr[5] && matrix6Arr[5] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }

        // 6 x 2 (6th matrix row x 2nd generic column)
        if (matrix6Arr[0] === generic2Arr[0] && matrix6Arr[0] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[1] === generic2Arr[1] && matrix6Arr[1] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[2] === generic2Arr[2] && matrix6Arr[2] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[3] === generic2Arr[3] && matrix6Arr[3] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[4] === generic2Arr[4] && matrix6Arr[4] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[5] === generic2Arr[5] && matrix6Arr[5] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }

        // 6 x 3 (6th matrix row x 3rd generic column)
        if (matrix6Arr[0] === generic3Arr[0] && matrix6Arr[0] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[1] === generic3Arr[1] && matrix6Arr[1] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[2] === generic3Arr[2] && matrix6Arr[2] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[3] === generic3Arr[3] && matrix6Arr[3] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[4] === generic3Arr[4] && matrix6Arr[4] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[5] === generic3Arr[5] && matrix6Arr[5] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }

        // 6 x 4 (6th matrix row x 4th generic column)
        if (matrix6Arr[0] === generic4Arr[0] && matrix6Arr[0] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[1] === generic4Arr[1] && matrix6Arr[1] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[2] === generic4Arr[2] && matrix6Arr[2] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[3] === generic4Arr[3] && matrix6Arr[3] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[4] === generic4Arr[4] && matrix6Arr[4] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (matrix6Arr[5] === generic4Arr[5] && matrix6Arr[5] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }

        // 7 x 1 (7th matrix row x 1st generic column)
        if (matrix7Arr[0] === generic1Arr[0] && matrix7Arr[0] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[1] === generic1Arr[1] && matrix7Arr[1] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[2] === generic1Arr[2] && matrix7Arr[2] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[3] === generic1Arr[3] && matrix7Arr[3] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[4] === generic1Arr[4] && matrix7Arr[4] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[5] === generic1Arr[5] && matrix7Arr[5] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }

        // 7 x 2 (7th matrix row x 2nd generic column)
        if (matrix7Arr[0] === generic2Arr[0] && matrix7Arr[0] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[1] === generic2Arr[1] && matrix7Arr[1] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[2] === generic2Arr[2] && matrix7Arr[2] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[3] === generic2Arr[3] && matrix7Arr[3] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[4] === generic2Arr[4] && matrix7Arr[4] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[5] === generic2Arr[5] && matrix7Arr[5] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }

        // 7 x 3 (7th matrix row x 3rd generic column)
        if (matrix7Arr[0] === generic3Arr[0] && matrix7Arr[0] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[1] === generic3Arr[1] && matrix7Arr[1] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[2] === generic3Arr[2] && matrix7Arr[2] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[3] === generic3Arr[3] && matrix7Arr[3] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[4] === generic3Arr[4] && matrix7Arr[4] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[5] === generic3Arr[5] && matrix7Arr[5] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }

        // 7 x 4 (7th matrix row x 4th generic column)
        if (matrix7Arr[0] === generic4Arr[0] && matrix7Arr[0] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[1] === generic4Arr[1] && matrix7Arr[1] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[2] === generic4Arr[2] && matrix7Arr[2] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[3] === generic4Arr[3] && matrix7Arr[3] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[4] === generic4Arr[4] && matrix7Arr[4] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (matrix7Arr[5] === generic4Arr[5] && matrix7Arr[5] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }

        // 8 x 1 (8th matrix row x 1st generic column)
        if (matrix8Arr[0] === generic1Arr[0] && matrix8Arr[0] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[1] === generic1Arr[1] && matrix8Arr[1] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[2] === generic1Arr[2] && matrix8Arr[2] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[3] === generic1Arr[3] && matrix8Arr[3] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[4] === generic1Arr[4] && matrix8Arr[4] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[5] === generic1Arr[5] && matrix8Arr[5] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }

        // 8 x 2 (8th matrix row x 2nd generic column)
        if (matrix8Arr[0] === generic2Arr[0] && matrix8Arr[0] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[1] === generic2Arr[1] && matrix8Arr[1] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[2] === generic2Arr[2] && matrix8Arr[2] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[3] === generic2Arr[3] && matrix8Arr[3] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[4] === generic2Arr[4] && matrix8Arr[4] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[5] === generic2Arr[5] && matrix8Arr[5] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }

        // 8 x 3 (8th matrix row x 3rd generic column)
        if (matrix8Arr[0] === generic3Arr[0] && matrix8Arr[0] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[1] === generic3Arr[1] && matrix8Arr[1] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[2] === generic3Arr[2] && matrix8Arr[2] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[3] === generic3Arr[3] && matrix8Arr[3] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[4] === generic3Arr[4] && matrix8Arr[4] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[5] === generic3Arr[5] && matrix8Arr[5] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }

        // 8 x 4 (8th matrix row x 4th generic column)
        if (matrix8Arr[0] === generic4Arr[0] && matrix8Arr[0] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[1] === generic4Arr[1] && matrix8Arr[1] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[2] === generic4Arr[2] && matrix8Arr[2] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[3] === generic4Arr[3] && matrix8Arr[3] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[4] === generic4Arr[4] && matrix8Arr[4] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (matrix8Arr[5] === generic4Arr[5] && matrix8Arr[5] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }

        // 9 x 1 (9th matrix row x 1st generic column)
        if (matrix9Arr[0] === generic1Arr[0] && matrix9Arr[0] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[1] === generic1Arr[1] && matrix9Arr[1] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[2] === generic1Arr[2] && matrix9Arr[2] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[3] === generic1Arr[3] && matrix9Arr[3] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[4] === generic1Arr[4] && matrix9Arr[4] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[5] === generic1Arr[5] && matrix9Arr[5] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }

        // 9 x 2 (9th matrix row x 2nd generic column)
        if (matrix9Arr[0] === generic2Arr[0] && matrix9Arr[0] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[1] === generic2Arr[1] && matrix9Arr[1] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[2] === generic2Arr[2] && matrix9Arr[2] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[3] === generic2Arr[3] && matrix9Arr[3] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[4] === generic2Arr[4] && matrix9Arr[4] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[5] === generic2Arr[5] && matrix9Arr[5] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }

        // 9 x 3 (9th matrix row x 3rd generic column)
        if (matrix9Arr[0] === generic3Arr[0] && matrix9Arr[0] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[1] === generic3Arr[1] && matrix9Arr[1] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[2] === generic3Arr[2] && matrix9Arr[2] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[3] === generic3Arr[3] && matrix9Arr[3] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[4] === generic3Arr[4] && matrix9Arr[4] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[5] === generic3Arr[5] && matrix9Arr[5] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }

        // 9 x 4 (9th matrix row x 4th generic column)
        if (matrix9Arr[0] === generic4Arr[0] && matrix9Arr[0] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[1] === generic4Arr[1] && matrix9Arr[1] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[2] === generic4Arr[2] && matrix9Arr[2] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[3] === generic4Arr[3] && matrix9Arr[3] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[4] === generic4Arr[4] && matrix9Arr[4] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (matrix9Arr[5] === generic4Arr[5] && matrix9Arr[5] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
    };

    // row 1 x generic columns
    const isEven1x1 = numberOfCoincidences1x1 % 2 === 0;
    const resultText1x1 = isEven1x1 ? '0' : '1';

    const isEven1x2 = numberOfCoincidences1x2 % 2 === 0;
    const resultText1x2 = isEven1x2 ? '0' : '1';

    const isEven1x3 = numberOfCoincidences1x3 % 2 === 0;
    const resultText1x3 = isEven1x3 ? '0' : '1';

    const isEven1x4 = numberOfCoincidences1x4 % 2 === 0;
    const resultText1x4 = isEven1x4 ? '0' : '1';

    // row 2 x generic columns
    const isEven2x1 = numberOfCoincidences2x1 % 2 === 0;
    const resultText2x1 = isEven2x1 ? '0' : '1';

    const isEven2x2 = numberOfCoincidences2x2 % 2 === 0;
    const resultText2x2 = isEven2x2 ? '0' : '1';

    const isEven2x3 = numberOfCoincidences2x3 % 2 === 0;
    const resultText2x3 = isEven2x3 ? '0' : '1';

    const isEven2x4 = numberOfCoincidences2x4 % 2 === 0;
    const resultText2x4 = isEven2x4 ? '0' : '1';

    // row 3 x generic columns
    const isEven3x1 = numberOfCoincidences3x1 % 2 === 0;
    const resultText3x1 = isEven3x1 ? '0' : '1';

    const isEven3x2 = numberOfCoincidences3x2 % 2 === 0;
    const resultText3x2 = isEven3x2 ? '0' : '1';

    const isEven3x3 = numberOfCoincidences3x3 % 2 === 0;
    const resultText3x3 = isEven3x3 ? '0' : '1';

    const isEven3x4 = numberOfCoincidences3x4 % 2 === 0;
    const resultText3x4 = isEven3x4 ? '0' : '1';

    // row 4 x generic columns
    const isEven4x1 = numberOfCoincidences4x1 % 2 === 0;
    const resultText4x1 = isEven4x1 ? '0' : '1';

    const isEven4x2 = numberOfCoincidences4x2 % 2 === 0;
    const resultText4x2 = isEven4x2 ? '0' : '1';

    const isEven4x3 = numberOfCoincidences4x3 % 2 === 0;
    const resultText4x3 = isEven4x3 ? '0' : '1';

    const isEven4x4 = numberOfCoincidences4x4 % 2 === 0;
    const resultText4x4 = isEven4x4 ? '0' : '1';

    // row 5 x generic columns
    const isEven5x1 = numberOfCoincidences5x1 % 2 === 0;
    const resultText5x1 = isEven5x1 ? '0' : '1';

    const isEven5x2 = numberOfCoincidences5x2 % 2 === 0;
    const resultText5x2 = isEven5x2 ? '0' : '1';

    const isEven5x3 = numberOfCoincidences5x3 % 2 === 0;
    const resultText5x3 = isEven5x3 ? '0' : '1';

    const isEven5x4 = numberOfCoincidences5x4 % 2 === 0;
    const resultText5x4 = isEven5x4 ? '0' : '1';

    // row 6 x generic columns
    const isEven6x1 = numberOfCoincidences6x1 % 2 === 0;
    const resultText6x1 = isEven6x1 ? '0' : '1';

    const isEven6x2 = numberOfCoincidences6x2 % 2 === 0;
    const resultText6x2 = isEven6x2 ? '0' : '1';

    const isEven6x3 = numberOfCoincidences6x3 % 2 === 0;
    const resultText6x3 = isEven6x3 ? '0' : '1';

    const isEven6x4 = numberOfCoincidences6x4 % 2 === 0;
    const resultText6x4 = isEven6x4 ? '0' : '1';

    // row 7 x generic columns
    const isEven7x1 = numberOfCoincidences7x1 % 2 === 0;
    const resultText7x1 = isEven7x1 ? '0' : '1';

    const isEven7x2 = numberOfCoincidences7x2 % 2 === 0;
    const resultText7x2 = isEven7x2 ? '0' : '1';

    const isEven7x3 = numberOfCoincidences7x3 % 2 === 0;
    const resultText7x3 = isEven7x3 ? '0' : '1';

    const isEven7x4 = numberOfCoincidences7x4 % 2 === 0;
    const resultText7x4 = isEven7x4 ? '0' : '1';

    // row 8 x generic columns
    const isEven8x1 = numberOfCoincidences8x1 % 2 === 0;
    const resultText8x1 = isEven8x1 ? '0' : '1';

    const isEven8x2 = numberOfCoincidences8x2 % 2 === 0;
    const resultText8x2 = isEven8x2 ? '0' : '1';

    const isEven8x3 = numberOfCoincidences8x3 % 2 === 0;
    const resultText8x3 = isEven8x3 ? '0' : '1';

    const isEven8x4 = numberOfCoincidences8x4 % 2 === 0;
    const resultText8x4 = isEven8x4 ? '0' : '1';

    // row 9 x generic columns
    const isEven9x1 = numberOfCoincidences9x1 % 2 === 0;
    const resultText9x1 = isEven9x1 ? '0' : '1';

    const isEven9x2 = numberOfCoincidences9x2 % 2 === 0;
    const resultText9x2 = isEven9x2 ? '0' : '1';

    const isEven9x3 = numberOfCoincidences9x3 % 2 === 0;
    const resultText9x3 = isEven9x3 ? '0' : '1';

    const isEven9x4 = numberOfCoincidences9x4 % 2 === 0;
    const resultText9x4 = isEven9x4 ? '0' : '1';

    const horizonalResultRow1 = [resultText1x1, resultText1x2, resultText1x3, resultText1x4];
    const horizonalResultRow2 = [resultText2x1, resultText2x2, resultText2x3, resultText2x4];
    const horizonalResultRow3 = [resultText3x1, resultText3x2, resultText3x3, resultText3x4];
    const horizonalResultRow4 = [resultText4x1, resultText4x2, resultText4x3, resultText4x4];
    const horizonalResultRow5 = [resultText5x1, resultText5x2, resultText5x3, resultText5x4];
    const horizonalResultRow6 = [resultText6x1, resultText6x2, resultText6x3, resultText6x4];
    const horizonalResultRow7 = [resultText7x1, resultText7x2, resultText7x3, resultText7x4];
    const horizonalResultRow8 = [resultText8x1, resultText8x2, resultText8x3, resultText8x4];
    const horizonalResultRow9 = [resultText9x1, resultText9x2, resultText9x3, resultText9x4];

    const passValuesToLocal = () => {
        localStorage.setItem('horizontalResultRow1', horizonalResultRow1.join());
        localStorage.setItem('horizontalResultRow2', horizonalResultRow2.join());
        localStorage.setItem('horizontalResultRow3', horizonalResultRow3.join());
        localStorage.setItem('horizontalResultRow4', horizonalResultRow4.join());
        localStorage.setItem('horizontalResultRow5', horizonalResultRow5.join());
        localStorage.setItem('horizontalResultRow6', horizonalResultRow6.join());
        localStorage.setItem('horizontalResultRow7', horizonalResultRow7.join());
        localStorage.setItem('horizontalResultRow8', horizonalResultRow8.join());
        localStorage.setItem('horizontalResultRow9', horizonalResultRow9.join());
    };

    const doHorizontalChecksHandler = () => {
        doHorisontalCheck();
        passValuesToLocal();
    };

    return (
        <div className="horizonal-v2-wrapper">
            <p className="component-title">Horizontal Checks</p>
            <div className="generic-matrix-wrapper">
                <div className="column-position">
                    <div className="column-position-item">P</div>
                    <div className="column-position-item">1</div>
                    <div className="column-position-item">2</div>
                    <div className="column-position-item">3</div>
                    <div className="column-position-item">4</div>
                </div>
                <div className="map-wrapper">
                    <div className="row-position">
                        {genericColumnsArr[0].map((element, index) => {
                            return <div className="row-position-item">{index + 1}</div>;
                        })}
                    </div>
                    {genericColumnsArr.map((column, index) => {
                        return (
                            <div key={index} className="generic-column">
                                {column.map((element, item) => {
                                    return (
                                        <div className="generic-item" key={item}>
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {/* <div className="generic-first-row generic-row">
                    <div className="row-position">1</div>
                    <div className="row-1">
                        <input className="generic-1-1" id="generic-1-1" name="generic-1-1" placeholder={'1-1'} onChange={changeGeneric11} />
                        <input className="generic-1-2" id="generic-1-2" name="generic-1-2" placeholder={'1-2'} onChange={changeGeneric12} />
                        <input className="generic-1-3" id="generic-1-3" name="generic-1-3" placeholder={'1-3'} onChange={changeGeneric13} />
                        <input className="generic-1-4" id="generic-1-4" name="generic-1-4" placeholder={'1-4'} onChange={changeGeneric14} />
                        <input className="generic-1-5" id="generic-1-5" name="generic-1-5" placeholder={'1-5'} onChange={changeGeneric15} />
                    </div>
                </div>
                <div className="generic-second-row generic-row">
                    <div className="row-position">2</div>
                    <div className="row-2">
                        <input className="generic-2-1" id="generic-2-1" name="generic-2-1" placeholder={'2-1'} onChange={changeGeneric21} />
                        <input className="generic-2-2" id="generic-2-2" name="generic-2-2" placeholder={'2-2'} onChange={changeGeneric22} />
                        <input className="generic-2-3" id="generic-2-3" name="generic-2-3" placeholder={'2-3'} onChange={changeGeneric23} />
                        <input className="generic-2-4" id="generic-2-4" name="generic-2-4" placeholder={'2-4'} onChange={changeGeneric24} />
                        <input className="generic-2-5" id="generic-2-5" name="generic-2-5" placeholder={'2-5'} onChange={changeGeneric25} />
                    </div>
                </div>
                <div className="generic-third-row generic-row">
                    <div className="row-position">3</div>
                    <div className="row-3">
                        <input className="generic-3-1" id="generic-3-1" name="generic-3-1" placeholder={'3-1'} onChange={changeGeneric31} />
                        <input className="generic-3-2" id="generic-3-2" name="generic-3-2" placeholder={'3-2'} onChange={changeGeneric32} />
                        <input className="generic-3-3" id="generic-3-3" name="generic-3-3" placeholder={'3-3'} onChange={changeGeneric33} />
                        <input className="generic-3-4" id="generic-3-4" name="generic-3-4" placeholder={'3-4'} onChange={changeGeneric34} />
                        <input className="generic-3-5" id="generic-3-5" name="generic-3-5" placeholder={'3-5'} onChange={changeGeneric35} />
                    </div>
                </div>
                <div className="generic-fourth-row generic-row">
                    <div className="row-position">4</div>
                    <div className="row-4">
                        <input className="generic-4-1" id="generic-4-1" name="generic-4-1" placeholder={'4-1'} onChange={changeGeneric41} />
                        <input className="generic-4-2" id="generic-4-2" name="generic-4-2" placeholder={'4-2'} onChange={changeGeneric42} />
                        <input className="generic-4-3" id="generic-4-3" name="generic-4-3" placeholder={'4-3'} onChange={changeGeneric43} />
                        <input className="generic-4-4" id="generic-4-4" name="generic-4-4" placeholder={'4-4'} onChange={changeGeneric44} />
                        <input className="generic-4-5" id="generic-4-5" name="generic-4-5" placeholder={'4-5'} onChange={changeGeneric45} />
                    </div>
                </div>
                <div className="generic-fifth-row generic-row">
                    <div className="row-position">5</div>
                    <div className="row-5">
                        <input className="generic-5-1" id="generic-5-1" name="generic-5-1" placeholder={'5-1'} onChange={changeGeneric51} />
                        <input className="generic-5-2" id="generic-5-2" name="generic-5-2" placeholder={'5-2'} onChange={changeGeneric52} />
                        <input className="generic-5-3" id="generic-5-3" name="generic-5-3" placeholder={'5-3'} onChange={changeGeneric53} />
                        <input className="generic-5-4" id="generic-5-4" name="generic-5-4" placeholder={'5-4'} onChange={changeGeneric54} />
                        <input className="generic-5-5" id="generic-5-5" name="generic-5-5" placeholder={'5-5'} onChange={changeGeneric55} />
                    </div>
                </div>
                <div className="generic-sixth-row generic-row">
                    <div className="row-position">6</div>
                    <div className="row-6">
                        <input className="generic-6-1" id="generic-6-1" name="generic-6-1" placeholder={'6-1'} onChange={changeGeneric61} />
                        <input className="generic-6-2" id="generic-6-2" name="generic-6-2" placeholder={'6-2'} onChange={changeGeneric62} />
                        <input className="generic-6-3" id="generic-6-3" name="generic-6-3" placeholder={'6-3'} onChange={changeGeneric63} />
                        <input className="generic-6-4" id="generic-6-4" name="generic-6-4" placeholder={'6-4'} onChange={changeGeneric64} />
                        <input className="generic-6-5" id="generic-6-5" name="generic-6-5" placeholder={'6-5'} onChange={changeGeneric65} />
                    </div>
                </div>
                <div className="generic-seventh-row generic-row">
                    <div className="row-position">7</div>
                    <div className="row-7">
                        <input className="generic-7-1" id="generic-7-1" name="generic-7-1" placeholder={'7-1'} onChange={changeGeneric71} />
                        <input className="generic-7-2" id="generic-7-2" name="generic-7-2" placeholder={'7-2'} onChange={changeGeneric72} />
                        <input className="generic-7-3" id="generic-7-3" name="generic-7-3" placeholder={'7-3'} onChange={changeGeneric73} />
                        <input className="generic-7-4" id="generic-7-4" name="generic-7-4" placeholder={'7-4'} onChange={changeGeneric74} />
                        <input className="generic-7-5" id="generic-7-5" name="generic-7-5" placeholder={'7-5'} onChange={changeGeneric75} />
                    </div>
                </div>
                <div className="generic-eighth-row generic-row">
                    <div className="row-position">8</div>
                    <div className="row-8">
                        <input className="generic-8-1" id="generic-8-1" name="generic-8-1" placeholder={'8-1'} onChange={changeGeneric81} />
                        <input className="generic-8-2" id="generic-8-2" name="generic-8-2" placeholder={'8-2'} onChange={changeGeneric82} />
                        <input className="generic-8-3" id="generic-8-3" name="generic-8-3" placeholder={'8-3'} onChange={changeGeneric83} />
                        <input className="generic-8-4" id="generic-8-4" name="generic-8-4" placeholder={'8-4'} onChange={changeGeneric84} />
                        <input className="generic-8-5" id="generic-8-5" name="generic-8-5" placeholder={'8-5'} onChange={changeGeneric85} />
                    </div>
                </div>
                <div className="generic-ninth-row generic-row">
                    <div className="row-position">9</div>
                    <div className="row-9">
                        <input className="generic-9-1" id="generic-9-1" name="generic-9-1" placeholder={'9-1'} onChange={changeGeneric91} />
                        <input className="generic-9-2" id="generic-9-2" name="generic-9-2" placeholder={'9-2'} onChange={changeGeneric92} />
                        <input className="generic-9-3" id="generic-9-3" name="generic-9-3" placeholder={'9-3'} onChange={changeGeneric93} />
                        <input className="generic-9-4" id="generic-9-4" name="generic-9-4" placeholder={'9-4'} onChange={changeGeneric94} />
                        <input className="generic-9-5" id="generic-9-5" name="generic-9-5" placeholder={'9-5'} onChange={changeGeneric95} />
                    </div>
                </div>
                <div className="generic-10-row generic-row">
                    <div className="row-position">10</div>
                    <div className="row-10">
                        <input className="generic-10-1" id="generic-10-1" name="generic-10-1" placeholder={'10-1'} onChange={changeGeneric101} />
                        <input className="generic-10-2" id="generic-10-2" name="generic-10-2" placeholder={'10-2'} onChange={changeGeneric102} />
                        <input className="generic-10-3" id="generic-10-3" name="generic-10-3" placeholder={'10-3'} onChange={changeGeneric103} />
                        <input className="generic-10-4" id="generic-10-4" name="generic-10-4" placeholder={'10-4'} onChange={changeGeneric104} />
                        <input className="generic-10-5" id="generic-10-5" name="generic-10-5" placeholder={'10-5'} onChange={changeGeneric105} />
                    </div>
                </div>
                <div className="generic-11-row generic-row">
                    <div className="row-position">11</div>
                    <div className="row-11">
                        <input className="generic-11-1" id="generic-11-1" name="generic-11-1" placeholder={'11-1'} onChange={changeGeneric111} />
                        <input className="generic-11-2" id="generic-11-2" name="generic-11-2" placeholder={'11-2'} onChange={changeGeneric112} />
                        <input className="generic-11-3" id="generic-11-3" name="generic-11-3" placeholder={'11-3'} onChange={changeGeneric113} />
                        <input className="generic-11-4" id="generic-11-4" name="generic-11-4" placeholder={'11-4'} onChange={changeGeneric114} />
                        <input className="generic-11-5" id="generic-11-5" name="generic-11-5" placeholder={'11-5'} onChange={changeGeneric115} />
                    </div>
                </div>
                <div className="generic-12-row generic-row">
                    <div className="row-position">12</div>
                    <div className="row-12">
                        <input className="generic-12-1" id="generic-12-1" name="generic-12-1" placeholder={'12-1'} onChange={changeGeneric121} />
                        <input className="generic-12-2" id="generic-12-2" name="generic-12-2" placeholder={'12-2'} onChange={changeGeneric122} />
                        <input className="generic-12-3" id="generic-12-3" name="generic-12-3" placeholder={'12-3'} onChange={changeGeneric123} />
                        <input className="generic-12-4" id="generic-12-4" name="generic-12-4" placeholder={'12-4'} onChange={changeGeneric124} />
                        <input className="generic-12-5" id="generic-12-5" name="generic-12-5" placeholder={'12-5'} onChange={changeGeneric125} />
                    </div>
                </div>
                <div className="generic-13-row generic-row">
                    <div className="row-position">13</div>
                    <div className="row-13">
                        <input className="generic-13-1" id="generic-13-1" name="generic-13-1" placeholder={'13-1'} onChange={changeGeneric131} />
                        <input className="generic-13-2" id="generic-13-2" name="generic-13-2" placeholder={'13-2'} onChange={changeGeneric132} />
                        <input className="generic-13-3" id="generic-13-3" name="generic-13-3" placeholder={'13-3'} onChange={changeGeneric133} />
                        <input className="generic-13-4" id="generic-13-4" name="generic-13-4" placeholder={'13-4'} onChange={changeGeneric134} />
                        <input className="generic-13-5" id="generic-13-5" name="generic-13-5" placeholder={'13-5'} onChange={changeGeneric135} />
                    </div>
                </div>
                <div className="generic-14-row generic-row">
                    <div className="row-position">14</div>
                    <div className="row-14">
                        <input className="generic-14-1" id="generic-14-1" name="generic-14-1" placeholder={'14-1'} onChange={changeGeneric141} />
                        <input className="generic-14-2" id="generic-14-2" name="generic-14-2" placeholder={'14-2'} onChange={changeGeneric142} />
                        <input className="generic-14-3" id="generic-14-3" name="generic-14-3" placeholder={'14-3'} onChange={changeGeneric143} />
                        <input className="generic-14-4" id="generic-14-4" name="generic-14-4" placeholder={'14-4'} onChange={changeGeneric144} />
                        <input className="generic-14-5" id="generic-14-5" name="generic-14-5" placeholder={'14-5'} onChange={changeGeneric145} />
                    </div>
                </div>
                <div className="generic-15-row generic-row">
                    <div className="row-position">15</div>
                    <div className="row-15">
                        <input className="generic-15-1" id="generic-15-1" name="generic-15-1" placeholder={'15-1'} onChange={changeGeneric151} />
                        <input className="generic-15-2" id="generic-15-2" name="generic-15-2" placeholder={'15-2'} onChange={changeGeneric152} />
                        <input className="generic-15-3" id="generic-15-3" name="generic-15-3" placeholder={'15-3'} onChange={changeGeneric153} />
                        <input className="generic-15-4" id="generic-15-4" name="generic-15-4" placeholder={'15-4'} onChange={changeGeneric154} />
                        <input className="generic-15-5" id="generic-15-5" name="generic-15-5" placeholder={'15-5'} onChange={changeGeneric155} />
                    </div>
                </div> */}
            </div>
            <div className="matrix-wrapper">
                <div className="column-position">
                    <div>Pos</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>hc</div>
                    <div>hc</div>
                    <div>hc</div>
                    <div>hc</div>
                    <div>hc</div>
                </div>
                <div className="matrix-first-row matrix-row">
                    <div className="row-position">1</div>
                    <div className="matrix-rows row-1">
                        <input className="textfield-1-1" id="text-1-1" name="text-1-1" placeholder={'1-1'} onChange={change11} />
                        <input className="textfield-1-2" id="text-1-2" name="text-1-2" placeholder={'1-2'} onChange={change12} />
                        <input className="textfield-1-3" id="text-1-3" name="text-1-3" placeholder={'1-3'} onChange={change13} />
                        <input className="textfield-1-4" id="text-1-4" name="text-1-4" placeholder={'1-4'} onChange={change14} />
                        <input className="textfield-1-5" id="text-1-5" name="text-1-5" placeholder={'1-5'} onChange={change15} />
                        <input className="textfield-1-6" id="text-1-6" name="text-1-6" placeholder={'1-6'} onChange={change16} />
                        <input className="textfield-1-7 external" id="text-1-7" name="text-1-7" placeholder={'h-7'} value={resultText1x1} />
                        <input className="textfield-1-8 external" id="text-1-8" name="text-1-8" placeholder={'h-8'} value={resultText1x2} />
                        <input className="textfield-1-9 external" id="text-1-9" name="text-1-9" placeholder={'h-9'} value={resultText1x3} />
                        <input className="textfield-1-10 external" id="text-1-10" name="text-1-10" placeholder={'h-10'} value={resultText1x4} />
                    </div>
                </div>
                <div className="matrix-second-row matrix-row">
                    <div className="row-position">2</div>
                    <div className="matrix-rows row-2">
                        <input className="textfield-2-1" id="text-2-1" name="text-2-1" placeholder={'2-1'} onChange={change21} />
                        <input className="textfield-2-2" id="text-2-2" name="text-2-2" placeholder={'2-2'} onChange={change22} />
                        <input className="textfield-2-3" id="text-2-3" name="text-2-3" placeholder={'2-3'} onChange={change23} />
                        <input className="textfield-2-4" id="text-2-4" name="text-2-4" placeholder={'2-4'} onChange={change24} />
                        <input className="textfield-2-5" id="text-2-5" name="text-2-5" placeholder={'2-5'} onChange={change25} />
                        <input className="textfield-2-6" id="text-2-6" name="text-2-6" placeholder={'2-6'} onChange={change26} />
                        <input className="textfield-2-7 external" id="text-2-7" name="text-2-7" placeholder={'h-7'} value={resultText2x1} />
                        <input className="textfield-2-8 external" id="text-2-8" name="text-2-8" placeholder={'h-8'} value={resultText2x2} />
                        <input className="textfield-2-9 external" id="text-2-9" name="text-2-9" placeholder={'h-9'} value={resultText2x3} />
                        <input className="textfield-2-10 external" id="text-2-10" name="text-2-10" placeholder={'h-10'} value={resultText2x4} />
                    </div>
                </div>
                <div className="matrix-third-row matrix-row">
                    <div className="row-position">3</div>
                    <div className="matrix-rows row-3">
                        <input className="textfield-3-1" id="text-3-1" name="text-3-1" placeholder={'3-1'} onChange={change31} />
                        <input className="textfield-3-2" id="text-3-2" name="text-3-2" placeholder={'3-2'} onChange={change32} />
                        <input className="textfield-3-3" id="text-3-3" name="text-3-3" placeholder={'3-3'} onChange={change33} />
                        <input className="textfield-3-4" id="text-3-4" name="text-3-4" placeholder={'3-4'} onChange={change34} />
                        <input className="textfield-3-5" id="text-3-5" name="text-3-5" placeholder={'3-5'} onChange={change35} />
                        <input className="textfield-3-6" id="text-3-6" name="text-3-6" placeholder={'3-6'} onChange={change36} />
                        <input className="textfield-3-7 external" id="text-3-7" name="text-3-7" placeholder={'h-7'} value={resultText3x1} />
                        <input className="textfield-3-8 external" id="text-3-8" name="text-3-8" placeholder={'h-8'} value={resultText3x2} />
                        <input className="textfield-3-9 external" id="text-3-9" name="text-3-9" placeholder={'h-9'} value={resultText3x3} />
                        <input className="textfield-3-10 external" id="text-3-10" name="text-3-10" placeholder={'h-10'} value={resultText3x4} />
                    </div>
                </div>
                <div className="matrix-fourth-row matrix-row">
                    <div className="row-position">4</div>
                    <div className="matrix-rows row-4">
                        <input className="textfield-4-1" id="text-4-1" name="text-4-1" placeholder={'4-1'} onChange={change41} />
                        <input className="textfield-4-2" id="text-4-2" name="text-4-2" placeholder={'4-2'} onChange={change42} />
                        <input className="textfield-4-3" id="text-4-3" name="text-4-3" placeholder={'4-3'} onChange={change43} />
                        <input className="textfield-4-4" id="text-4-4" name="text-4-4" placeholder={'4-4'} onChange={change44} />
                        <input className="textfield-4-5" id="text-4-5" name="text-4-5" placeholder={'4-5'} onChange={change45} />
                        <input className="textfield-4-6" id="text-4-6" name="text-4-6" placeholder={'4-6'} onChange={change46} />
                        <input className="textfield-4-7 external" id="text-4-7" name="text-4-7" placeholder={'h-7'} value={resultText4x1} />
                        <input className="textfield-4-8 external" id="text-4-8" name="text-4-8" placeholder={'h-8'} value={resultText4x2} />
                        <input className="textfield-4-9 external" id="text-4-9" name="text-4-9" placeholder={'h-9'} value={resultText4x3} />
                        <input className="textfield-4-10 external" id="text-4-10" name="text-4-10" placeholder={'h-10'} value={resultText4x4} />
                    </div>
                </div>
                <div className="matrix-fifth-row matrix-row">
                    <div className="row-position">5</div>
                    <div className="matrix-rows row-5">
                        <input className="textfield-5-1" id="text-5-1" name="text-5-1" placeholder={'5-1'} onChange={change51} />
                        <input className="textfield-5-2" id="text-5-2" name="text-5-2" placeholder={'5-2'} onChange={change52} />
                        <input className="textfield-5-3" id="text-5-3" name="text-5-3" placeholder={'5-3'} onChange={change53} />
                        <input className="textfield-5-4" id="text-5-4" name="text-5-4" placeholder={'5-4'} onChange={change54} />
                        <input className="textfield-5-5" id="text-5-5" name="text-5-5" placeholder={'5-5'} onChange={change55} />
                        <input className="textfield-5-6" id="text-5-6" name="text-5-6" placeholder={'5-6'} onChange={change56} />
                        <input className="textfield-5-7 external" id="text-5-7" name="text-5-7" placeholder={'h-7'} value={resultText5x1} />
                        <input className="textfield-5-8 external" id="text-5-8" name="text-5-8" placeholder={'h-8'} value={resultText5x2} />
                        <input className="textfield-5-9 external" id="text-5-9" name="text-5-9" placeholder={'h-9'} value={resultText5x3} />
                        <input className="textfield-5-10 external" id="text-5-10" name="text-5-10" placeholder={'h-10'} value={resultText5x4} />
                    </div>
                </div>
                <div className="matrix-sixth-row matrix-row">
                    <div className="row-position">6</div>
                    <div className="matrix-rows row-6">
                        <input className="textfield-6-1" id="text-6-1" name="text-6-1" placeholder={'6-1'} onChange={change61} />
                        <input className="textfield-6-2" id="text-6-2" name="text-6-2" placeholder={'6-2'} onChange={change62} />
                        <input className="textfield-6-3" id="text-6-3" name="text-6-3" placeholder={'6-3'} onChange={change63} />
                        <input className="textfield-6-4" id="text-6-4" name="text-6-4" placeholder={'6-4'} onChange={change64} />
                        <input className="textfield-6-5" id="text-6-5" name="text-6-5" placeholder={'6-5'} onChange={change65} />
                        <input className="textfield-6-6" id="text-6-6" name="text-6-6" placeholder={'6-6'} onChange={change66} />
                        <input className="textfield-6-7 external" id="text-6-7" name="text-6-7" placeholder={'h-7'} value={resultText6x1} />
                        <input className="textfield-6-8 external" id="text-6-8" name="text-6-8" placeholder={'h-8'} value={resultText6x2} />
                        <input className="textfield-6-9 external" id="text-6-9" name="text-6-9" placeholder={'h-9'} value={resultText6x3} />
                        <input className="textfield-6-10 external" id="text-6-10" name="text-6-10" placeholder={'h-10'} value={resultText6x4} />
                    </div>
                </div>
                <div className="matrix-seventh-row matrix-row">
                    <div className="row-position">7</div>
                    <div className="matrix-rows row-7">
                        <input className="textfield-7-1" id="text-7-1" name="text-7-1" placeholder={'7-1'} onChange={change71} />
                        <input className="textfield-7-2" id="text-7-2" name="text-7-2" placeholder={'7-2'} onChange={change72} />
                        <input className="textfield-7-3" id="text-7-3" name="text-7-3" placeholder={'7-3'} onChange={change73} />
                        <input className="textfield-7-4" id="text-7-4" name="text-7-4" placeholder={'7-4'} onChange={change74} />
                        <input className="textfield-7-5" id="text-7-5" name="text-7-5" placeholder={'7-5'} onChange={change75} />
                        <input className="textfield-7-6" id="text-7-6" name="text-7-6" placeholder={'7-6'} onChange={change76} />
                        <input className="textfield-7-7 external" id="text-7-7" name="text-7-7" placeholder={'h-7'} value={resultText7x1} />
                        <input className="textfield-7-8 external" id="text-7-8" name="text-7-8" placeholder={'h-8'} value={resultText7x2} />
                        <input className="textfield-7-9 external" id="text-7-9" name="text-7-9" placeholder={'h-9'} value={resultText7x3} />
                        <input className="textfield-7-10 external" id="text-7-10" name="text-7-10" placeholder={'h-10'} value={resultText7x4} />
                    </div>
                </div>
                <div className="matrix-eighth-row matrix-row">
                    <div className="row-position">8</div>
                    <div className="matrix-rows row-8">
                        <input className="textfield-8-1" id="text-8-1" name="text-8-1" placeholder={'8-1'} onChange={change81} />
                        <input className="textfield-8-2" id="text-8-2" name="text-8-2" placeholder={'8-2'} onChange={change82} />
                        <input className="textfield-8-3" id="text-8-3" name="text-8-3" placeholder={'8-3'} onChange={change83} />
                        <input className="textfield-8-4" id="text-8-4" name="text-8-4" placeholder={'8-4'} onChange={change84} />
                        <input className="textfield-8-5" id="text-8-5" name="text-8-5" placeholder={'8-5'} onChange={change85} />
                        <input className="textfield-8-6" id="text-8-6" name="text-8-6" placeholder={'8-6'} onChange={change86} />
                        <input className="textfield-8-7 external" id="text-8-7" name="text-8-7" placeholder={'h-7'} value={resultText8x1} />
                        <input className="textfield-8-8 external" id="text-8-8" name="text-8-8" placeholder={'h-8'} value={resultText8x2} />
                        <input className="textfield-8-9 external" id="text-8-9" name="text-8-9" placeholder={'h-9'} value={resultText8x3} />
                        <input className="textfield-8-10 external" id="text-8-10" name="text-8-10" placeholder={'h-10'} value={resultText8x4} />
                    </div>
                </div>
                <div className="matrix-ninth-row matrix-row">
                    <div className="row-position">9</div>
                    <div className="matrix-rows row-9">
                        <input className="textfield-9-1" id="text-9-1" name="text-9-1" placeholder={'9-1'} onChange={change91} />
                        <input className="textfield-9-2" id="text-9-2" name="text-9-2" placeholder={'9-2'} onChange={change92} />
                        <input className="textfield-9-3" id="text-9-3" name="text-9-3" placeholder={'9-3'} onChange={change93} />
                        <input className="textfield-9-4" id="text-9-4" name="text-9-4" placeholder={'9-4'} onChange={change94} />
                        <input className="textfield-9-5" id="text-9-5" name="text-9-5" placeholder={'9-5'} onChange={change95} />
                        <input className="textfield-9-6" id="text-9-6" name="text-9-6" placeholder={'9-6'} onChange={change96} />
                        <input className="textfield-9-7 external" id="text-9-7" name="text-9-7" placeholder={'h-7'} value={resultText9x1} />
                        <input className="textfield-9-8 external" id="text-9-8" name="text-9-8" placeholder={'h-8'} value={resultText9x2} />
                        <input className="textfield-9-9 external" id="text-9-9" name="text-9-9" placeholder={'h-9'} value={resultText9x3} />
                        <input className="textfield-9-10 external" id="text-9-10" name="text-9-10" placeholder={'h-10'} value={resultText9x4} />
                    </div>
                </div>
                <button onClick={doHorizontalChecksHandler}>Do Horizontal Check</button>
            </div>
        </div>
    );
};

export default HorizontalCheckV2;
