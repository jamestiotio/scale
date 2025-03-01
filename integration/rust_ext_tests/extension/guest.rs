// Code generated by scale-extension 0.4.8, DO NOT EDIT.
// output: local_inttest_latest_guest

pub mod types;
use crate::types::{Encode, Decode};
use std::io::Cursor;
use polyglot_rs::{Decoder, Encoder};
static HASH: &'static str = "b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7";
static mut READ_BUFFER: Vec<u8> = Vec::new();
static mut WRITE_BUFFER: Vec<u8> = Vec::new();
pub trait Example {
    fn Hello(
        &self,
        params: types::Stringval,
    ) -> Result<Option<types::Stringval>, Box<dyn std::error::Error>>;
}
#[export_name = "ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Resize"]
#[no_mangle]
pub unsafe fn ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Resize(
    size: u32,
) -> *const u8 {
    READ_BUFFER.resize(size as usize, 0);
    return READ_BUFFER.as_ptr();
}
#[link(wasm_import_module = "env")]
extern "C" {
    #[link_name = "ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello"]
    fn _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello(
        instance: u64,
        ptr: u32,
        size: u32,
    ) -> u64;
}
#[derive(Clone, Debug, PartialEq)]
pub struct _Example {
    pub instanceId: u64,
}
impl Example for _Example {
    fn Hello(
        &self,
        params: types::Stringval,
    ) -> Result<Option<types::Stringval>, Box<dyn std::error::Error>> {
        unsafe {
            let mut cursor = Cursor::new(Vec::new());
            types::Stringval::encode(Some(&params), &mut cursor);
            let vec = cursor.into_inner();
            WRITE_BUFFER.resize(vec.len() as usize, 0);
            WRITE_BUFFER.copy_from_slice(&vec);
            let mut off = WRITE_BUFFER.as_ptr() as u32;
            let mut l = WRITE_BUFFER.len() as u32;
            _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello(
                self.instanceId,
                off,
                l,
            );
            let mut cursor = Cursor::new(&mut READ_BUFFER);
            return types::Stringval::decode(&mut cursor);
        }
    }
}
#[link(wasm_import_module = "env")]
extern "C" {
    #[link_name = "ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New"]
    fn _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New(
        instance: u64,
        ptr: u32,
        size: u32,
    ) -> u64;
}
pub fn New(
    params: types::Stringval,
) -> Result<Option<impl Example>, Box<dyn std::error::Error>> {
    unsafe {
        let mut cursor = Cursor::new(Vec::new());
        types::Stringval::encode(Some(&params), &mut cursor);
        let vec = cursor.into_inner();
        WRITE_BUFFER.resize(vec.len() as usize, 0);
        WRITE_BUFFER.copy_from_slice(&vec);
        let mut off = WRITE_BUFFER.as_ptr() as u32;
        let mut l = WRITE_BUFFER.len() as u32;
        READ_BUFFER.resize(0, 0);
        let v = _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New(
            0,
            off,
            l,
        );
        if READ_BUFFER.len() > 0 {
            let mut cursor = Cursor::new(&mut READ_BUFFER);
            if let Ok(error) = cursor.decode_error() {
                return Err(error);
            }
        }
        let c = _Example { instanceId: v };
        return Ok(Some(c));
    }
}
#[link(wasm_import_module = "env")]
extern "C" {
    #[link_name = "ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World"]
    fn _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World(
        instance: u64,
        ptr: u32,
        size: u32,
    ) -> u64;
}
pub fn World(
    params: types::Stringval,
) -> Result<Option<types::Stringval>, Box<dyn std::error::Error>> {
    unsafe {
        let mut cursor = Cursor::new(Vec::new());
        types::Stringval::encode(Some(&params), &mut cursor);
        let vec = cursor.into_inner();
        WRITE_BUFFER.resize(vec.len() as usize, 0);
        WRITE_BUFFER.copy_from_slice(&vec);
        let mut off = WRITE_BUFFER.as_ptr() as u32;
        let mut l = WRITE_BUFFER.len() as u32;
        _ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World(
            0,
            off,
            l,
        );
        let mut cursor = Cursor::new(&mut READ_BUFFER);
        return types::Stringval::decode(&mut cursor);
    }
}
pub unsafe fn error(error: Box<dyn std::error::Error>) -> (u32, u32) {
    let mut cursor = Cursor::new(Vec::new());
    return match cursor.encode_error(error) {
        Ok(_) => {
            let vec = cursor.into_inner();
            WRITE_BUFFER.resize(vec.len() as usize, 0);
            WRITE_BUFFER.copy_from_slice(&vec);
            (WRITE_BUFFER.as_ptr() as u32, WRITE_BUFFER.len() as u32)
        }
        Err(_) => (0, 0),
    };
}
