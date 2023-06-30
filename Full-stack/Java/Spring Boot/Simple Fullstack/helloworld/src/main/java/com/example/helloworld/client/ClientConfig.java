/*
 * Copyright 2023 lseli.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.helloworld.client;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration class.
 *
 * @author lseli
 */
@Configuration
public class ClientConfig {

    /**
     * Inserts initial data into the database.
     *
     * @return
     */
    @Bean
    CommandLineRunner commandLineRunner(IClientRepository clientRepository) {
        return args -> {
            Client ClientA = new Client("ClientA", 0);
            Client ClientB = new Client("ClientB", 0);
            Client ClientC = new Client("ClientC", 0);
            Client ClientD = new Client("ClientD", 0);
            Client ClientE = new Client("ClientE", 0);
            Client ClientF = new Client("ClientF", 0);
            Client ClientG = new Client("ClientG", 0);

            clientRepository.saveAll(
                    List.of(
                            ClientA,
                            ClientB,
                            ClientC,
                            ClientD,
                            ClientE,
                            ClientF,
                            ClientG
                    )
            );
        };
    }
}
