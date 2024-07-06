// Code generated by scale-extension v0.4.8, DO NOT EDIT.
// output: local_inttest_latest_host

package local_inttest_latest_host

import (
	"errors"
	"sync"
	"sync/atomic"

	"github.com/loopholelabs/polyglot"
	extension "github.com/loopholelabs/scale-extension-interfaces"
)

// Write an error to the scale function guest buffer.
func hostError(mem extension.ModuleMemory, resize extension.Resizer, err error) {
	b := polyglot.NewBuffer()
	polyglot.Encoder(b).Error(err)

	writeBuffer, err := resize("ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Resize", uint64(b.Len()))

	if err != nil {
		panic(err)
	}

	if !mem.Write(uint32(writeBuffer), b.Bytes()) {
		panic(err)
	}
}

type hostExt struct {
	functions map[string]extension.InstallableFunc
	host      *Host
}

func (he *hostExt) Init() map[string]extension.InstallableFunc {
	return he.functions
}

func (he *hostExt) Reset() {
	// Reset any instances that have been created.

	he.host.instances_Example = make(map[uint64]Example)

}

func New(impl Interface) extension.Extension {
	hostWrapper := &Host{impl: impl}

	fns := make(map[string]extension.InstallableFunc)

	// Add global functions to the runtime

	fns["ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New"] = hostWrapper.host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New

	fns["ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World"] = hostWrapper.host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World

	hostWrapper.instances_Example = make(map[uint64]Example)

	fns["ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello"] = hostWrapper.host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello

	return &hostExt{
		functions: fns,
		host:      hostWrapper,
	}
}

type Host struct {
	impl Interface

	gid_Example           uint64
	instancesLock_Example sync.Mutex
	instances_Example     map[uint64]Example
}

// Global functions

func (h *Host) host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_New(mem extension.ModuleMemory, resize extension.Resizer, params []uint64) {

	ptr := uint32(params[1])
	length := uint32(params[2])
	data, _ := mem.Read(ptr, length)

	cd := &Stringval{}
	cd, err := DecodeStringval(cd, data)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	// Call the implementation
	r, err := h.impl.New(cd)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	id := atomic.AddUint64(&h.gid_Example, 1)
	h.instancesLock_Example.Lock()
	h.instances_Example[id] = r
	h.instancesLock_Example.Unlock()

	// Return the ID
	params[0] = id

}

func (h *Host) host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_World(mem extension.ModuleMemory, resize extension.Resizer, params []uint64) {

	ptr := uint32(params[1])
	length := uint32(params[2])
	data, _ := mem.Read(ptr, length)

	cd := &Stringval{}
	cd, err := DecodeStringval(cd, data)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	// Call the implementation
	r, err := h.impl.World(cd)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	b := polyglot.NewBuffer()
	r.Encode(b)

	writeBuffer, err := resize("ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Resize", uint64(b.Len()))

	if err != nil {
		hostError(mem, resize, err)
		return
	}

	if !mem.Write(uint32(writeBuffer), b.Bytes()) {
		hostError(mem, resize, err)
		return
	}

}

func (h *Host) host_ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Example_Hello(mem extension.ModuleMemory, resize extension.Resizer, params []uint64) {
	h.instancesLock_Example.Lock()
	r, ok := h.instances_Example[params[0]]
	h.instancesLock_Example.Unlock()
	if !ok {
		hostError(mem, resize, errors.New("Instance ID not found!"))
		return
	}

	ptr := uint32(params[1])
	length := uint32(params[2])
	data, _ := mem.Read(ptr, length)

	cd := &Stringval{}
	cd, err := DecodeStringval(cd, data)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	resp, err := r.Hello(cd)
	if err != nil {
		hostError(mem, resize, err)
		return
	}

	b := polyglot.NewBuffer()
	resp.Encode(b)

	writeBuffer, err := resize("ext_b30af2dd8561988edd7b281ad5c1b84487072727a8ad0e490a87be0a66b037d7_Resize", uint64(b.Len()))

	if err != nil {
		hostError(mem, resize, err)
		return
	}

	if !mem.Write(uint32(writeBuffer), b.Bytes()) {
		hostError(mem, resize, err)
		return
	}

}
