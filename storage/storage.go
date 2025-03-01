/*
	Copyright 2022 Loophole Labs

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		   http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

// Package storage is used to store and retrieve built Scale Functions and Scale Signatures
package storage

import (
	"errors"
	"strings"
)

var (
	ErrInvalidName         = errors.New("invalid name")
	ErrInvalidTag          = errors.New("invalid tag")
	ErrInvalidOrganization = errors.New("invalid organization")
)

const (
	DefaultDirectory = ".config/scale"
)

func getNameFromName(fileName string) string {
	split := strings.Split(fileName, "_")
	if len(split) != 5 {
		return ""
	}

	return split[1]
}

func getTagFromName(fileName string) string {
	split := strings.Split(fileName, "_")
	if len(split) != 5 {
		return ""
	}

	return split[2]
}

func getOrgFromName(fileName string) string {
	split := strings.Split(fileName, "_")
	if len(split) != 5 {
		return ""
	}

	return split[0]
}

func getHashFromName(fileName string) string {
	split := strings.Split(fileName, "_")
	if len(split) != 5 {
		return ""
	}

	return split[3]
}
